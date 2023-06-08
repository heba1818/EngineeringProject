<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: Authorization, Content-Type');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "engproj";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$userId = $_GET['userId'];
$sql = "SELECT * FROM products WHERE user_id = '$userId'";
$result = $conn->query($sql);

if (!$result) {
  die("Error: " . $sql . "<br>" . $conn->error);
}

// Fetch results as associative array
$products = array();
while ($row = $result->fetch_assoc()) {
  $products[] = $row;
}

// Convert associative array to JSON and send response
echo json_encode($products);

$conn->close();
?>