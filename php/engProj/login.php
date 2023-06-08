<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

session_start(); 

include "db_connect.php";

$email = isset($_POST['email']) ? $_POST['email'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

// Query to retrieve the user with the given email and password
$query = "SELECT * FROM signup WHERE email = '$email' AND password = '$password'";
$result = mysqli_query($conn, $query);

// Check if a row was returned, indicating a successful login
if (mysqli_num_rows($result) === 1) {
    // Login successful
    echo json_encode(['success' => true]);
} else {
    // Login failed
    echo json_encode(['success' => false, 'message' => 'Invalid email or password']);
}

// Close the database connection
mysqli_close($conn);
?>