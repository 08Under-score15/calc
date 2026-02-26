const operators = ['+', '-', '*', '/'];

function handleButtonClick(e) {
    const input = document.getElementById('calculator-input');
    input.scrollLeft = input.scrollWidth;

    const buttonText = e.target.innerText;
    let inputText = input.value;
    let lastChar = inputText[inputText.length - 1];

    
    if (inputText === 'Error') {
        input.value = '';
        inputText = '';
        lastChar = '';
    }

    if (buttonText === '=') {
        if (inputText === '' || operators.includes(lastChar)) return;

        try {
            const result = eval(inputText);
            input.value = result ?? 'Error';
        } catch {
            input.value = 'Error';
        }
    }

    else if (buttonText === 'C') {
        input.value = '';
    }

    else if (buttonText === 'DEL') {
        input.value = inputText.slice(0, -1);
    }

    else if (buttonText === '%') {
        if (inputText === '' || operators.includes(lastChar)) return;
        input.value = parseFloat(inputText) / 100;
    }

    else if (operators.includes(buttonText)) {
        if (inputText === '' || operators.includes(lastChar) || lastChar === '.') return;
        input.value += buttonText;
    }

    else {
        if (buttonText === '.' && lastChar === '.') return;
        input.value += buttonText;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});