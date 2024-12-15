document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentId = document.getElementById('studentId').value;

    fetch('results.php?studentId=' + studentId)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('result').innerHTML = `
                    <h2>Result</h2>
                    <p>Student ID: ${data.student.id}</p>
                    <p>Student Name: ${data.student.name}</p>
                    <p>Subject: ${data.student.subject}</p>
                    <p>Marks: ${data.student.marks}</p>
                `;
            } else {
                document.getElementById('result').innerHTML = '<p>No results found</p>';
            }
        });
});


