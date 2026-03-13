function markAttendance() {
    const studentName = document.getElementById('studentName').value;
    const studentID = document.getElementById('studentID').value;

    if (studentName === '' || studentID === '') {
        alert('Please enter both name and ID');
        return;
    }

    const attendanceList = document.getElementById('attendanceList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${studentName} (${studentID})</span> <span>${new Date().toLocaleString()}</span>`;

    attendanceList.appendChild(listItem);

    // Simulate an AI feature (e.g., predicting attendance patterns)
    predictAttendancePattern();

    document.getElementById('studentName').value = '';
    document.getElementById('studentID').value = '';
}

function predictAttendancePattern() {
    // Simulated AI feature: randomly predict whether attendance is increasing or decreasing
    const prediction = Math.random() > 0.5 ? 'increasing' : 'decreasing';
    alert(`AI Prediction: Attendance is ${prediction}`);
}
