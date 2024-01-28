document.addEventListener('DOMContentLoaded', function () {
    const degreeInput = document.getElementById('degree');
    const tempTypeSelect = document.getElementById('temp-type');
    const convertBtn = document.getElementById('convert-btn');
    const celsiusValue = document.getElementById('celsius');

    convertBtn.addEventListener('click', function () {
        convertTemperature();
    });

    function convertTemperature() {
        const degree = parseFloat(degreeInput.value);

        if (isNaN(degree)) {
            alert('Please enter a valid number for degrees.');
            return;
        }

        const tempType = tempTypeSelect.value;
        let result;

        if (tempType === 'Farenheit') {
            result = (degree * 9/5) + 32;
        } else if (tempType === 'Kelvin') {
            result = degree + 273.15;
        } else {
            alert('Please select a valid temperature type.');
            return;
        }

        celsiusValue.textContent = result.toFixed(2);
    }
});
