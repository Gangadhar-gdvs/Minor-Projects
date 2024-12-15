document.getElementById('convert').addEventListener('click', function() {
    const temp = parseFloat(document.getElementById('temp').value);
    const unit = document.getElementById('unit').value;

    if (isNaN(temp)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    let convertedTemp;
    switch (unit) {
        case 'c':
            convertedTemp = (temp - 32) * (5 / 9);
            break;
        case 'f':
            convertedTemp = temp * (9 / 5) + 32;
            break;
        case 'k':
            convertedTemp = temp + 273.15;
            break;
    }

    document.getElementById('result').textContent = ` ${convertedTemp.toFixed(2)} ${unit === 'c' ? '°C' : unit === 'f' ? '°F' : 'K'}`;
});