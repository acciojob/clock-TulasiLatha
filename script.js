//your JS code here. If required.

function updateDateTimer() {
    const dateTimerElement = document.getElementById('timer');
    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString(); // Get a formatted date and time string

    dateTimerElement.textContent = formattedDateTime; // Update the container with the formatted date and time
}

// Update the date timer immediately and then every second
updateDateTimer();
setInterval(updateDateTimer, 1000);
