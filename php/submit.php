<?php
if(isset($_POST['submit'])){
	$to = "suad.asceric@outlook.com";
	$name = $_POST['q1'];
	$from = $_POST['q2'];
	$priority = $_POST['q3'];
	$description = $_POST['q4'];
	$budget = $_POST['q5'];
	$subject = "Form submission";
    $subject2 = "Copy of your form submission";
	$message = "\n\nIme : " . $name . "\n\n Mail : " . $from . "\n\n Prioriteti za novi sajt : " . $priority . "\n\n Opis posla : " . $description . "\n\n Budzet : " . $budget;
	$message2 = "Here is a copy of your message " . $name . "\n\nPrioriteti za novi sajt " . $priority . "\n\n Description : " . $description . "\n\n Budget : " . $budget;
	$headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2);
	header('Location: ../thank_you.html');
	exit();
}
?>