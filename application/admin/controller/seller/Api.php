<?php
namespace app\admin\controller\seller;

use app\admin\library\Auth;
use app\common\model\Configvalue;
use think\Config;
use think\Controller;
use think\Lang;
use think\Session;

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
class Api extends Controller
{
   public function index($value='')
   {
    var_dump('empty');
   }

   public function addSellerByOldSystem($value='')
   {
       if ( $this->request->isPost() )
       {
           $params = $_POST;
           $key = config('pay_system_key');
           if ( !array_key_exists('pay_system_key', $params) || $params['pay_system_key'] != $key ) {
             $this->ReturnAjax(['status'=>1,
                                'msg'=> 'empty 2',
                                ]);
           }
           $openid = $params['openid'];
           $sj_id = $params['sj_id'];
           $res = model('AuthGroupAccess')->where('pay_system_uid',$sj_id)->find();
           $sj_id = $res['uid'];
           $this->ReturnAjax(['status'=>-1,
                              'msg'=>'add user false'
                              ]);
           // if ( !in_array( $this->level,  $this->addSellerLevel) ) {
           //     // var_dump('no auth to manage sellers');
           //     $this->code = -1;
           //     $this->msg = 'no auth';
           //     return;
           // }
            //商户等级配置
            $level = config('levels')['seller'];
            //查找用户信息
            $res = model('admin')->where('pay_open_id',$openid)->find();
            // var_dump($res);
            if ($res) {
              $this->ReturnAjax(['status'=>-1,
                                 'msg'=>'duplicate user false'
                                 ]);
            }
            //增加用户信息
            $user = ['username'=>$openid,'createtime'=>time(),'status'=>'normal','pay_open_id'=>$openid];
            $res = model('admin')->save($user);
            if (!$res) {
               $this->ReturnAjax(['status'=>-1,
                                  'msg'=>'add user false'
                                  ]);
            }
            $userId = $this->model->getLastInsID();
            // var_dump($res);
            // return;

            //记录所有上级uid，方便查询
            $res = Db::name('auth_group_access')->where('uid', $sj_id)->field('all_add_uid')->find();
            $allAddUid = $res['all_add_uid'] . $sj_id . ',';
     
             // $admin = $this->model->create($params);
             // AdminLog::record(__('Add'), $this->model->getLastInsID());
             // $allAddUid = $res['all_add_uid'] . $agentId . ',';
             //写入映射表
             $dataset = ['uid' => $userId, 'group_id' => $level, 'add_uid'=> $sj_id, 'all_add_uid'=>$allAddUid];

             model('AuthGroupAccess')->save($dataset);
             $this->code = 1;

       }
       return;
   }
   /**
    * @param $data ajax返回参数
    * @return JSON
    */
   static function ReturnAjax($data){
       echo json_encode($data);
       exit;
   }


}
