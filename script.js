const display = document.getElementById('display');

function appendInput(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(display.value);

        // Handle percentage calculation
        if (display.value.includes('%')) {
            const parts = display.value.split('%');
            const percentage = parseFloat(parts[0]);
            result = (percentage / 100) * (parseFloat(parts[1]) || 1);
        }

        display.value = result;
    } catch {
        display.value = 'Error';
    }
}
