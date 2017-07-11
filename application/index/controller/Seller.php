<?php

namespace app\index\controller;

use \Think\Db ;
use think\Session;
use app\common\controller\Frontend;
use app\admin\controller\appstore;

class Seller extends Frontend
{

    protected $layout = 'bootstrap';

    private $appid = '';

    private $appsecret = '';

    private $state = '';

    public function _initialize()
    {
        parent::_initialize();
        $this->uid = Session::get('uid');
        $this->appid = config('appid');
        $this->appsecret = config('appsecret');
        $this->state = config('state');
    }

    public function index()
    {

      $redirect_uri = urlencode('http://open.gravpay.com/index/seller/shopCentre');
      $url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' . $this->appid . '&redirect_uri=' . $redirect_uri . '&response_type=code&scope=snsapi_base&state='.$this->state.'#wechat_redirect';
      header( "Location: $url" ); 
      exit('end');
    }

    public function shopCentre($username='')
    {
      $this->getCode();

      if (!array_key_exists('state',$_GET) || $_GET['state'] != $this->state) {
        exit('empty(1)');
      }

      $uid = Session::get('uid');
 
       //应用包括非默认应用和默认应用
      $applist =  Db::query('SELECT b.*,a.is_default FROM  fa_app_admin_access AS a JOIN fa_app_store AS b on a.uid = '. $uid . ' AND a.appid = b.id AND b.state = 1');
      $defaultIds = Db::name('auth_group_access')->where('uid',$this->uid)->field('all_add_uid')->find();
       $defaultIds = trim($defaultIds['all_add_uid'],',');
       if (!$defaultIds) {
           $defaultIds = 1;
       }
       $defaultIds =  Db::query('select b.*,a.is_default from fa_app_admin_access as a join fa_app_store as b on a.uid in ('.$defaultIds.') and a.is_default = 1 and a.appid = b.id' );

      $applist = array_merge($applist,$defaultIds);

      $this->view->assign("applist", $applist);

      return $this->view->fetch('shopCentre');
    }

    public function getCode($value='')
    {
      if (!array_key_exists('state',$_GET) || $_GET['state'] != $this->state) {
        exit('empty(1)');
      }

      $CODE = $_GET['code'];

      $url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='.$this->appid.'&secret=' . $this->appsecret . '&code='.$CODE.'&grant_type=authorization_code';
      $weixin=file_get_contents($url);//通过code换取网页授权access_token
      $jsondecode=json_decode($weixin); //对JSON格式的字符串进行编码
      $array = get_object_vars($jsondecode);//转换成数组
      $openid = $array['openid'];//输出openid
      
      $this->login( $openid );
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

  

}
