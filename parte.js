const telefoneInput = document.getElementById('telefone');
const link = document.querySelectorAll('link')
const enviar = document.querySelectorAll('enviar')


telefoneInput.addEventListener('input',() => {
    var inputValue = target.value.replace(/\D/g, ''); 
    var formattedValue = '';

    if (inputValue.length > 0) {
        formattedValue = '(' + inputValue.substring(0, 2);
    }
    if (inputValue.length > 2) {
        formattedValue += ') ' + inputValue.substring(2, 7);
    }
    if (inputValue.length > 6) {
        formattedValue += '-' + inputValue.substring(7, 11);
    }

    target.value = formattedValue;
    target.style.classList.add('green-text');



});

