const temperatureInput = document.getElementById('temperature');
const inputUnitSelect = document.getElementById('input-unit');
const convertBtn = document.getElementById('convert-btn');
const resultPara = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    const temperatureValue = parseFloat(temperatureInput.value);
    const inputUnit = inputUnitSelect.value;

    if (isNaN(temperatureValue)) {
        alert('Please enter a valid temperature value');
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch (inputUnit) {
        case 'Celsius':
            celsius = temperatureValue;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            break;
        case 'Fahrenheit':
            fahrenheit = temperatureValue;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = (fahrenheit - 32) * 5/9 + 273.15;
            break;
        case 'Kelvin':
            kelvin = temperatureValue;
            celsius = kelvin - 273.15;
            fahrenheit = (kelvin - 273.15) * 9/5 + 32;
            break;
    }

    resultPara.textContent = `Celsius: ${celsius.toFixed(2)}°C
                                Fahrenheit: ${fahrenheit.toFixed(2)}°F
                                Kelvin: ${kelvin.toFixed(2)}K`;
});
