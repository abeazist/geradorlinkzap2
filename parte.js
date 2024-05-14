const telefoneInput = document.getElementById('telefone');
const linkzap = document.querySelectorAll("[linkzap]");
const enviar = document.querySelectorAll("[enviar]");

//APLICA MASCARA
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
 
 //COPIAR LINK
 linkzap.addEventListener('click',() => {
     criaLink();
 })

 function criaLink() {
    const copiar = document.createElement("div");
    const textoLink = document.createElement("p");

    numeroTel = telefoneInput.value;
    linkWhatszap = 'https://wa.me/55${numeroTel}'
    copiar.id = "link";
    textoLink.id = "clickText";

    navigator.clipboard.writeText(linkWhatszap).then(()=>{
        copiar.innerHTML = `https://wa.me/55${numeroTel}`;
        textoClicar.innerHTML = "Clique no link para copiar";
        box1.appendChild(copy);
        box1.appendChild(textoClicar);
        alert('Link Copiado')
    })
 }
 
 