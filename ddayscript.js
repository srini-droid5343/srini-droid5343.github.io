document.addEventListener('DOMContentLoaded', function() {
    // Set the target date for the countdown (change this to your desired date)
    const targetDate = new Date('2025-01-01T00:00:00');

    // Function to update the countdown timer
    function updateCountdown() {
        const currentTime = new Date();
        const timeDifference = targetDate - currentTime;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Update the HTML elements with the calculated values
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    }

    // Initial call to update countdown
    updateCountdown();

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});
