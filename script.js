let isCelsius = true;

document.getElementById('convert-btn').addEventListener('click', convertTemperature);
document.getElementById('switch-btn').addEventListener('click', switchUnits);

function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);

    if (isCelsius) {
        const fahrenheit = temperature * 9/5 + 32;
        document.getElementById('result').innerText = `${temperature}°C is equal to ${fahrenheit}°F`;
    } else {
        const celsius = (temperature - 32) * 5/9;
        document.getElementById('result').innerText = `${temperature}°F is equal to ${celsius}°C`;
    }
}