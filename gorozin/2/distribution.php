<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include 'Exception.php';
include 'PHPMailer.php';
include 'SMTP.php';

function send_mail($mail)
{
$to  = "kosarev.mike2001@yandex.ru" ; 

$subject = "Заголовок письма"; 

$message = ' <p>Текст письма</p> </br> <b>1-ая строчка </b> </br><i>2-ая строчка </i> </br>';

$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
$headers .= "From: От кого письмо anketa@ecoten.ru\r\n"; 
$headers .= "Reply-To: anketa@ecoten.ru\r\n"; 

mail($to, $subject, $message, $headers); 
}
send_mail("kosarev.mike2001@yandex.ru");


?>