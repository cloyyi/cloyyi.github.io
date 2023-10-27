function convertTemperature() {
    var unit = document.getElementById('unit').value;
    var temperature = parseFloat(document.getElementById('temperature').value);
    var result = document.getElementById('result');

    if (unit === 'celsius') {
        result.textContent = `Fahrenheit: ${temperature * 9/5 + 32}°F | Kelvin: ${temperature + 273.15}K`;
    } else if (unit === 'fahrenheit') {
        result.textContent = `Celsius: ${(temperature - 32) * 5/9}°C | Kelvin: ${(temperature - 32) * 5/9 + 273.15}K`;
    } else if (unit === 'kelvin') {
        result.textContent = `Celsius: ${temperature - 273.15}°C | Fahrenheit: ${(temperature - 273.15) * 9/5 + 32}°F`;
    }
}
