const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function onInputChange(event) {
    if (event.currentTarget.value === '') {
        nameOutput.textContent = 'незнакомец'
    }
    else {
        nameOutput.textContent = event.currentTarget.value;
    }
};

nameInput.addEventListener('input', onInputChange);