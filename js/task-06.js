const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', onInputRefChange);

function onInputRefChange (event) {
    if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid')
    }
    else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
};

