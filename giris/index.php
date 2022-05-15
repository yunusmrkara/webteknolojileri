<?php

$username=$_POST['username'];
$password=$_POST['password'];

 if($username=='b211210379@sakarya.edu.tr'||$password==b211210379)
    {    
        
        header('Location: http://localhost/giris/basariliindex.html');
 
    }
    
    else
    header('Location: http://localhost/giris/index.html');

?>