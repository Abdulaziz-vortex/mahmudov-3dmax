<?php
// https://aapi.telegram.org/bot1283026424:AAGYqM5erJ9vY1tcdzsnZFLNy3uxgnqOwgY/getUpdates

$name = $_POST['user_name']; // user name here
$secname = $_POST['user_secname'];
$phone = $_POST['user_phone'];
$course_name = $_POST['course_name'];

$token = "1283026424:AAGYqM5erJ9vY1tcdzsnZFLNy3uxgnqOwgY";
$chat_id = "-368359094";

$arr = array(
	"course : " => $course_name,
	'user name: ' => $name,
	'user last-name: ' => $secname,
	'user phone: ' => $phone
);

foreach ($arr as $key => $value) {
	$txt .= "<b>".$key."</b>".$value."%0A";
}


$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if($sendToTelegram){
	echo "Sizning buyyurtmangiz qabul boldi";
	header("location:index.php");
	print_r($course_name);
}else{
	echo "error !";
	header("location:index.php");
}
?>