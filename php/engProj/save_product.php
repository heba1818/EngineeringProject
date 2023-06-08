<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

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
// Get the product data from the request
$name = $_POST['name'];
$description = $_POST['description'];
$amount = $_POST['amount'];
$price = $_POST['price'];
$datePublished = $_POST['datePublished'];
$quality = $_POST['quality'];
$image = $_POST['image'];
$quantity = $_POST['quantity'];
$user_id = $user_id['user_id'];

$stmt = $conn->prepare("INSERT INTO products (name, description, amount, price, date_published, quality, image, quantity, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssssi", $name, $description, $amount, $price, $datePublished, $quality, $image, $quantity, $user_id);

if ($stmt->execute()) {
    echo "Product saved successfully";
} else {
    echo "Error saving product: " . $stmt->error;
}
$stmt->close();
$conn->close();
?>