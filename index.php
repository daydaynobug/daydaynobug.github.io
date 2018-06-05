<?php
	function checkSignature(){
		$signature = $_GET["signature"];
		$timestamp = $_GET["timestamp"];
		$nonce = $_GET["nonce"];
		$echostr = $_GET["echostr"];
		$token = "zss";

		$tmpArr = array($token,$timestamp,$nonce);
		sort($tmpArr,SORT_STRING);
		$str = implode($tmpArr);
		$sign = sha1($str);

		if ($sign == $signature) {
			echo $echostr;
		}
	}
	checkSignature()
?>
