const inputRef = document.querySelector('#validation-input');

const onInputRefChange = function (event) {
    if (inputRef.value.length !== Number(inputRef.dataset.length)) {
        inputRef.classList.add('invalid');
    }
    else {
        inputRef.classList.replace('invalid', 'valid');
    }
};

inputRef.addEventListener('change', onInputRefChange);