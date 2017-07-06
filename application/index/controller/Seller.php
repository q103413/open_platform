<?php

namespace app\index\controller;

use \Think\Db ;
use think\Session;
use app\common\controller\Frontend;

class Seller extends Frontend
{

    protected $layout = 'bootstrap';

    public function _initialize()
    {
        parent::_initialize();
    }

    public function index($uid='')
    {
   //      include 'wechat.class.php';
   //        $token=$this->_get("api"); //取得token
   //        $arraywho=explode('xx',$token);  //获得是哪个商家
   //        $who=$arraywho[1];

   //        define('DEBUG', true);//是否开启调试模式

   //       $options = array(
   //            'token'=>$token  //填写你设定的key
   //          );
   //          $weObj = new Wechat($options);

   //    $openid = $weObj->getRev()->getRevFrom();

   //    exit('end');
   //    //第一步获取oppenid并且存入cookie
   // echo Session::get('openid','wechat');       
   // $url_get_session = 'http://112.74.188.231/admin/seller/api/getSession';
   // $url_set_session = 'http://112.74.188.231/admin/seller/api/setSession';
   // // $post_data['openid'] = $openid;
   // // $post_data['sj_id'] = $SceneId;
   // $post_data['pay_system_key'] = '563fdsadhf23';
   // $open_return = $this->post($url_set_session, $post_data);      
   // $open_return = $this->post($url_get_session, $post_data);      
   // var_dump($open_return);
      // $this->scan();
          // $row = $this->model->get(['id' => $ids]);
          // $res = new \app\admin\controller\appstore\Applist();
          // // var_dump($this->testapp()['rows']);
          // $this->view->assign("res", $res->test());
           // $params = $this->request->post("row/a");
           if (!$uid) {
              $uid = 1;   
           }
         // if ( $params['userid'] && is_int($params['userid']) ) {
         //    $uid = $params['userid'];
         // }else{
         //    $uid = (int)json_decode( $_SESSION['think']['admin'])->id;
         // }
         $applist = Db::query('SELECT a.* FROM  '.config('database.prefix').'app_store a JOIN '.config('database.prefix').'app_admin_access b ON b.uid = '.(int)$uid.' AND b.appid = a.id and a.state = 1');
         $this->view->assign("res", $applist);

          // var_dump($applist);
         return $this->view->fetch();

    }
    function post($url,$param,$post_file=FALSE){
        $oCurl = curl_init();
        if(stripos($url,"https://")!==FALSE){
          curl_setopt($oCurl, CURLOPT_SSL_VERIFYPEER, FALSE);
          curl_setopt($oCurl, CURLOPT_SSL_VERIFYHOST, false);
        }
        if (is_string($param) || $post_file ) {
          $strPOST = $param;
        } else {
          $aPOST = array();
          foreach($param as $key=>$val){
            $aPOST[] = $key."=".urlencode($val);
          }
          $strPOST =  join("&", $aPOST);
        }
        curl_setopt($oCurl, CURLOPT_URL, $url);
        curl_setopt($oCurl, CURLOPT_RETURNTRANSFER, 1 );
        curl_setopt($oCurl, CURLOPT_POST,true);
        curl_setopt($oCurl, CURLOPT_POSTFIELDS,$strPOST);
        $sContent = curl_exec($oCurl);
        $aStatus = curl_getinfo($oCurl);
        curl_close($oCurl);
        if(intval($aStatus["http_code"])==200){
          return $sContent;
        }else{
          return $this->postUrl($url,$strPOST);
        }
      }
      function postUrl($url,$data)
      { 
        $opts = array(
          'http' => array(
                  'header' => "Content-Type: application/x-www-form-urlencoded\r\n".
                              "Content-Length: ".strlen($data)."\r\n".
                              "User-Agent:MyAgent/1.0\r\n",
                  'method'  => "POST",
                  'content' => $data,
              ),
          // 'http'=>array(    
          //   'method' => 'POST',  
          //   'content' => $data,
          //   'timeout'=>60
          // )
        ); 
        $context = stream_context_create($opts); 
        $html =file_get_contents($url, false, $context); 
        if(is_array($http_response_header))
        {
              foreach($http_response_header as $header)
              { 
                if (preg_match('/HTTP\/1\.[0-9].+?([0-9]+).?(.+)/', $header,$code))
                { 
                  if((int)$code[1]==200)
                  {
                    return $html;
                  }
                  break ;
                }
              }
        }
      return false;
      }
      public function scan(&$weObj){
          $SceneId = $weObj->getRevSceneId();
         # $weObj->text(I('get.api'))->reply();
          #用户和代理商关联
          $openid = $weObj->getRev()->getRevFrom();
          #判断用户是否有代理

          $agent_id = M('user')->where(['user'=>$openid])->getField('who');
          if(!$agent_id){
              $user_agent = M('user')->where(['user'=>$openid])->save(['who'=>$SceneId]);
          }

          $agent_name = M('admintb')->where(['id'=>$SceneId])->getField('mc');

          #获取当前代理的OEMid
          $oem_id = M('admintb')->where(['id'=>$SceneId])->getField('OEMwho');

          $agent_config_domain = M('admin_confset')->where(['who'=>$oem_id])->getField('domain');
       #  $weObj->text(M()->getLastSql())->reply();
     
      }

    public function seller($uid='')
    {
     return $this->view->fetch();

    }

    

}
