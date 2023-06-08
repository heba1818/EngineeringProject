<?php
session_start(); 

include "db_connect.php";

// Get form data
$email = $_POST['email'];
$name = $_POST['name'];
$surname = $_POST['surname'];
$phonenumber = $_POST['phonenumber'];
$coregisterno = $_POST['coregisterno'];
$date = date('Y-m-d', strtotime($_POST['date']));
$password = $_POST['password'];
$selectedoption = $_POST['selectedoption'];

// Insert form data into database
$sql = "INSERT INTO signup (email, name, surname, phonenumber, coregisterno, date, password, selectedoption) 
        VALUES ('$email', '$name', '$surname', '$phonenumber', '$coregisterno', '$date', '$password', '$selectedoption')";

// Execute query
if ($conn->query($sql) === TRUE) {
    echo "Record inserted successfully";
} else {
    echo "Error inserting record: " . $conn->error;
}
// Close database connection
mysqli_close($conn);
?>