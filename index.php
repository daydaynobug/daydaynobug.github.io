<?php 
	function checkSignature(){
		$signature = $_GET["signature"];
		
		$timestamp = $_GET["timestamp"];
		$nonce = $_GET["nonce"];
		$token = "zss";

		$echostr = $_GET["echostr"];

		$tmpArr = array($token,$timestamp,$nonce);
		//排序
		sort($tmpArr,SORT_STRING);
		//数组转字符串
		$str = implode($tmpArr);
		//加密
		$sign = sha1($str);
		//判断是否来源于微信
		if ($sign == $signature) {
			echo $echostr;
		}
	}
	checkSignature();
 ?>