<?php
    $servername="localhost";
    $username="root";
    $password="";
    $database="qlquanlau_php";

    $conn = mysqli_connect($servername,$username,$password,$database);
    if(!$conn){
        echo("Không kết nối được với MySQL");
    }
    else{
        echo("");
    }
    
?>