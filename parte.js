const telefoneInput = document.getElementById('telefone');
const linkzap = document.querySelectorAll('linkzap');
const enviar = document.querySelectorAll('enviar');



telefoneInput.addEventListener('input',() => { 
var inputValue = event.target.value.replace(/\D/g, ''); 
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
    
event.target.value = formattedValue
//telefoneInput.style.color='green'

 });
 
 linkzap.addEventListener('click',() => {
    var 
 })
 
 