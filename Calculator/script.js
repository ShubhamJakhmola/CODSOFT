let displayValue = '0';

function appendToDisplay(value) {
    if (displayValue === '0' && value !== 'C') {
        displayValue = value;
    } else if (value !== 'C') {
        displayValue += value;
    } else {
        displayValue = '0';
    }
    document.getElementById('display').innerText = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    document.getElementById('display').innerText = displayValue;
}
