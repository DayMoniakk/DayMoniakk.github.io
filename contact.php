<?php

if (isset($_POST['submit']))
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "daymoniakk@gmx.fr";
    $headers = "From: ".$email;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, "contact form", $txt, $headers);
    header("Location: index.html?mailsend");
}