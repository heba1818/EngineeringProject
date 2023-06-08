<?php session_start(); 

include "db_connect.php";

// Get email from form data
$email = $_POST['email'];

// Query database for user's role
$sql = "SELECT role FROM signup WHERE email='$email'";
$result = $conn->query($sql);

// Check if user exists and get their role
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $role = $row["role"];
    echo $role;
} else {
    // User not found
    echo "error";
}

// Close database connection
mysqli_close($conn);
?>