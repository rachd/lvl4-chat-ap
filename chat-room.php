<?php
if (isset($_POST['message']) && isset($_POST['username'])) {
	header("Access-Control-Allow-Origin: *");
	$log = array();
	$name = htmlspecialchars($_POST['username']);
	$message = htmlspecialchars($_POST['message']);
	$log['name'] = $name;
    $log['message'] = $message;
	echo json_encode($log);
}

$file = 'chatlog.txt';

file_put_contents($file, $name . ":\n" . $message . "\n\n", FILE_APPEND | LOCK_EX);
?>