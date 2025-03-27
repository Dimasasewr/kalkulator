function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function calculateResult() {
    let display = document.getElementById('display');
    let expression = display.value;

    // Ganti simbol untuk operasi pangkat dan akar kuadrat
    expression = expression.replace('^', '**');
    expression = expression.replace('√', 'Math.sqrt');

    try {
        let result = eval(expression);
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}
