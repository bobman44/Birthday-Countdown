function calculateTimeLeft() {
  const targetDate = new Date(new Date().getFullYear(), 9, 25); // October is month 9 (0-indexed)
  const now = new Date();
  let timeDifference = targetDate.getTime() - now.getTime();
  if (timeDifference < 0) {
    // If the target date has passed, reset the countdown to next year's October 25th
    targetDate.setFullYear(targetDate.getFullYear() + 1);
    timeDifference = targetDate.getTime() - now.getTime();
  }
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function updateCountdown() {
  const timeLeft = calculateTimeLeft();
  document.getElementById("days").textContent = timeLeft.days;
  document.getElementById("hours").textContent = timeLeft.hours;
  document.getElementById("minutes").textContent = timeLeft.minutes;
  document.getElementById("seconds").textContent = timeLeft.seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the countdown immediately on page load
updateCountdown();
