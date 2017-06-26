<?php
namespace app\admin\controller\auth;
use app\admin\model\AdminLog;
use app\common\controller\Backend;
use fast\Random;
use fast\Tree;
use \Think\Db ;
use fast\Http;
/**
 * 管理员管理
 *
 * @icon fa fa-users
 * @remark 一个管理员可以有多个角色组,左侧的菜单根据管理员所拥有的权限进行生成
 */
class Admin extends Backend
{

    protected $model = null;
    //当前登录管理员所有子节点组别
    protected $childrenIds = [];

    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('Admin');
        //初始化用户级别
        parent::initLevel();
        //显示下级名称
         $map['id'] = $this->level + 1;
         $groupName = Db::table(config('database.prefix').'auth_group')->where($map)->find();
 
        $this->view->assign('groupdata', $groupName['name']);
    }

    /**
     * 添加
     */
    public function add()
    {
        // var_dump(config('level_agent'));
        if ($this->request->isPost())
        {
            $this->code = -1;
            $params = $this->request->post("row/a"); 
            // var_dump($this->level);exit;           
            if ($params)
            {
                //记录所有上级uid，方便查询
                $res = Db::name('auth_group_access')->where('uid', $this->uid)->field('all_add_uid')->find();
              
                $allAddUid = $res['all_add_uid'] . $this->uid . ',';

                $level =  $this->level +1;

                //老系统同步添加用户
                $pay_params['username'] = $params['username'];
                $pay_params['password'] = $params['password'];
                $pay_params['name'] = $params['nickname'];
                $pay_params['pay_system_key'] = config('pay_system_key');

                $pay_system = new Http();
                // $agentLevel = array_slice(config('levels') ,3,3 );

                if ( $level == config('levels')['oem'] ) {
                    $old_url = config('pay_system_url') . 'index.php/api/addOem';
                }else if ( in_array( $level, config('level_agent') ) ) {
                    $old_url = config('pay_system_url') . 'index.php/api/addAgent';
                }
                $res = $pay_system->post($old_url, $pay_params);
// var_dump($res);
                $res  = json_decode($res,true);
                if ( $res['status']==0 ) {
                    $pay_system_uid = $res['account_id'];
                }else{
                     $this->code = -1;
                     $this->msg = $res['msg'];
                     return;
                }

                //开放平台写入
                $params['salt'] = Random::alnum();
                $params['password'] = md5(md5($params['password']) . $params['salt']);
                $admin = $this->model->create($params);
                AdminLog::record(__('Add'), $this->model->getLastInsID());

                //过滤不允许的组别,避免越权
                // $group = array_intersect($this->childrenIds, $group);
                // $dataset = [];
                // foreach ($group as $value)
                // {
                $dataset = ['uid' => $admin->id, 'group_id' => $level, 'add_uid'=> $this->uid, 'all_add_uid'=>$allAddUid, 'pay_system_uid' => $pay_system_uid];
                // }
                model('AuthGroupAccess')->save($dataset);
                $this->code = 1;
            }

            return;
        }
        return $this->view->fetch();
    }

    /**
     * 编辑
     */
    public function edit($ids = NULL)
    {
        $row = $this->model->get(['id' => $ids]);
        if (!$row)
            $this->error(__('No Results were found'));
        if ($this->request->isPost())
        {
            $this->code = -1;
            $params = $this->request->post("row/a");
            if ($params)
            {
                if ($params['password'])
                {
                    $params['salt'] = Random::alnum();
                    $params['password'] = md5(md5($params['password']) . $params['salt']);
                }
                // db('admin')->where('id',$ids)->update(['name' => 'thinkphp']);
                $res = $row->save($params);
                AdminLog::record(__('Edit'), $ids);
                if ($res>0) {
                   $this->code = 1;
                   $this->msg = '修改成功';
                   return;
                }
               // var_dump( $row->getLastSql() );

                // 先移除所有权限
                // model('AuthGroupAccess')->where('uid', $row->id)->delete();

                // $group = $this->request->post("group/a");

                // // 过滤不允许的组别,避免越权
                // $group = array_intersect($this->childrenIds, $group);

                // $dataset = [];
                // $uid = (int)json_decode( $_SESSION['think']['admin'])->id;
                // foreach ($group as $value)
                // {
                //     $dataset[] = ['uid' => $row->id, 'group_id' => $value,'add_uid'=>$uid];
                // }
                // model('AuthGroupAccess')->saveAll($dataset);
                // $this->code = 1;
            }

            return;
        }
        $grouplist = $this->auth->getGroups($row['id']);
        $groupids = [];
        foreach ($grouplist as $k => $v)
        {
            $groupids[] = $v['id'];
        }
        $this->view->assign("row", $row);
        $this->view->assign("groupids", $groupids);
        return $this->view->fetch();
    }

    /**
     * 删除
     */
    public function del($ids = "")
    {
        $this->code = -1;
        $this->msg = 'no finish';
        return;
        if ($ids)
        {
            // 避免越权删除管理员
            $childrenGroupIds = $this->childrenIds;
            $adminList = $this->model->where('id', 'in', $ids)->where('id', 'in', function($query) use($childrenGroupIds)
                    {
                        $query->name('auth_group_access')->where('group_id', 'in', $childrenGroupIds)->field('uid');
                    })->select();
            if ($adminList)
            {
                $deleteIds = [];
                foreach ($adminList as $k => $v)
                {
                    $deleteIds[] = $v->id;
                }
                $deleteIds = array_diff($deleteIds, [$this->auth->id]);
                if ($deleteIds)
                {
                    AdminLog::record(__('Del'), $deleteIds);
                    $this->model->destroy($deleteIds);
                    model('AuthGroupAccess')->where('uid', 'in', $deleteIds)->delete();
                    $this->code = 1;
                }
            }
        }

        return;
    }

    /**
     * 批量更新
     * @internal
     */
    public function multi($ids = "")
    {
        // 管理员禁止批量操作
        $this->code = -1;
    }

}
