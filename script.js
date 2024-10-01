function updateClock() {
    const now = new Date();
    
    // Update Digital Clock
    const digitalClock = document.getElementById('digital-clock');
    digitalClock.textContent = now.toLocaleTimeString();

    // Update Analog Clock
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    const secondHand = document.getElementById('second-hand');
    const minuteHand = document.getElementById('minute-hand');
    const hourHand = document.getElementById('hour-hand');

    secondHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutes * 6 + seconds * 0.1}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hours * 30 + minutes * 0.5}deg)`;
}

function updateTemperature() {
    // For demo purposes, we'll use a random temperature.
    const temperature = (Math.random() * 40).toFixed(1); // Random temperature between 0 and 40
    const temperatureElement = document.getElementById('temperature');
    temperatureElement.textContent = `Temperature: ${temperature} °C`;
}

// Update every second
setInterval(() => {
    updateClock();
    updateTemperature();
}, 1000);

// Initial call
updateClock();
updateTemperature();
