<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test_results";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
 die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

// Your SQL code goes here

// Close connection

?>