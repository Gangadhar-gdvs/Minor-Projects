<?php
include 'db.php';

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['update'])) {
    $id = $_POST['id'];
    $marks = $_POST['marks'];
    $grade = $_POST['grade'];

    // Check if the connection is still open
    if (!$conn->ping()) {
        die("Connection is closed");
    }

    $sql = "UPDATE results SET marks='$marks', grade='$grade' WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
}

if (isset($_POST['delete'])) {
    $id = $_POST['id'];

    // Check if the connection is still open
    if (!$conn->ping()) {
        die("Connection is closed");
    }

    $sql = "DELETE FROM results WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . $conn->error;
    }
}

// Close the database connection after performing operations
$conn->close();
?>
