function convert() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = document.getElementById('fahrenheit').value;

    if (celsius !== '') {
        const fahrenheitResult = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheitResult.toFixed(2);
        document.getElementById('calculation').innerText = `${celsius}°C × (9/5) + 32 = ${fahrenheitResult.toFixed(2)}°F`;
    } else if (fahrenheit !== '') {
        const celsiusResult = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsiusResult.toFixed(2);
        document.getElementById('calculation').innerText = `${fahrenheit}°F - 32 × (5/9) = ${celsiusResult.toFixed(2)}°C`;
    } else {
        alert('Masukkan nilai Celsius atau Fahrenheit!');
    }
}

function reverse() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = document.getElementById('fahrenheit').value;

    if (fahrenheit !== '') {
        const celsiusResult = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsiusResult.toFixed(2);
        document.getElementById('calculation').innerText = `${fahrenheit}°F - 32 × (5/9) = ${celsiusResult.toFixed(2)}°C`;
    } else if (celsius !== '') {
        const fahrenheitResult = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheitResult.toFixed(2);
        document.getElementById('calculation').innerText = `${celsius}°C × (9/5) + 32 = ${fahrenheitResult.toFixed(2)}°F`;
    } else {
        alert('Masukkan nilai Fahrenheit atau Celsius!');
    }
}

function reset() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').innerText = '';
}
