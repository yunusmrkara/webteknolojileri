<?php

$username=$_POST['username'];
$password=$_POST['password'];

 if($username=='b211210379@sakarya.edu.tr'||$password=='b211210379')
    {    
        
        header('Location: https://yunusemrekara.000webhostapp.com/giris/basariliindex.html');
 
    }
    
    else
    header('Location: https://yunusemrekara.000webhostapp.com/giris/index.html');

?>