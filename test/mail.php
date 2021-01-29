<?php

$recepient = "8mmdprivate@gmail.com";
$sitename = "Alesta UP";

$tsname = trim($_POST["tsname"]);
$tsmail = trim($_POST["tsmail"]);
$tshonss = trim($_POST["tshonss"]);
$tsdoljnos = trim($_POST["tsdoljnos"]);
$thpo = trim($_POST["thpo"]);
$allrzult = trim($_POST["allrzult"]);
$ahar = trim($_POST["ahar"]);
$bhar = trim($_POST["bhar"]);
$char = trim($_POST["char"]);
$dhar = trim($_POST["dhar"]);
$ehar = trim($_POST["ehar"]);
$fhar = trim($_POST["fhar"]);
$ghar = trim($_POST["ghar"]);
$hhar = trim($_POST["hhar"]);
$ihar = trim($_POST["ihar"]);
$jhar = trim($_POST["jhar"]);

$message = "Имя: $tsname 
Почта: $tsmail 
Телефон: $tshonss 
Должность: $tsdoljnos 
Пол: $thpo 
Итоговый результат: $allrzult 
А: $ahar 
В: $bhar 
С: $char 
D: $dhar 
E: $ehar 
F: $fhar 
G: $ghar 
H: $hhar 
I: $ihar 
J: $jhar 
";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
