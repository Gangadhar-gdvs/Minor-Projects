<?php
include 'db.php';

$sql = "SELECT id, student_id, subject, marks, grade FROM results";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
 echo "<table><tr><th>ID</th><th>Student ID</th><th>Subject</th><th>Marks</th><th>Grade</th></tr>";
  
 while($row = $result->fetch_assoc()) {
    echo "<tr><td>" . $row["id"]. "</td><td>" . $row["student_id"]. "</td><td>" . $row["subject"]. "</td><td>" . $row["marks"]. "</td><td>" . $row["grade"]. "</td></tr>";
 }
  
 echo "</table>";
} else {
 echo "0 results";
}

$conn->close();
?>