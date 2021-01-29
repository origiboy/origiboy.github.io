<?php

$recepient = "superhrwitches@gmail.com";


$sitename = "Alesta UP Наталья";

$tsname = trim($_POST["test_name"]);
$tsphone = trim($_POST["test_phone"]);
$title = trim($_POST["title"]);
$p = trim($_POST["p"]);
$a = trim($_POST["a"]);
$e = trim($_POST["e"]);
$i = trim($_POST["i"]);

$message = "Имя: $tsname
Телефон: $tsphone
Итоговый результат:
Заголовок: $title
p: $p
a: $a
e: $e
i: $i
";



$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
