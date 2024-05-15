const telefoneInput = document.getElementById('telefone');
const linkzap = document.querySelectorAll("[linkzap]");
const enviar = document.querySelectorAll("[enviar]");
const copiar = document.getElementById("[copiar]")

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

} if (inputValue.length === 11){
    event.target.style.color="green";
}else{
    event.target.style.color="";
}

event.target.value = formattedValue


 });
 
 //GERAR LINK
 linkzap.addEventListener('click',() => {
     criaLink();
 })

 linkCopiado.addEventListener('click',() => {
    copiaLink()
 })

 function criaLink() {
    numeroTelefone = telefoneInput.value;
    texto = "Clique no link para copiar";
    formatacao= numeroTelefone.replace(/\D/g, '')
    linkWhatszap = `https://wa.me/55${formatacao}`;

    // ESTILIZACAO link
    document.getElementById('linkCopiado').innerText = linkWhatszap;
    document.getElementById('linkCopiado').style.display = 'flex';
    document.getElementById('linkCopiado').style.border = '1px solid black';
    document.getElementById('linkCopiado').style.padding = '1px';
    document.getElementById('linkCopiado').style.marginTop = '7px';
    document.getElementById('linkCopiado').style.borderRadius = '8px';
    document.getElementById('linkCopiado').style.fontSize='small';
   
    
    
    
    //ESTILIZACAOtexto
    document.getElementById('texto').innerText = texto;
    document.getElementById('texto').style.display = 'flex';
    document.getElementById('texto').style.justifyContent = 'center';
    document.getElementById('texto').style.color = 'black';
    document.getElementById('texto').style.fontSize='smaller';
    
}

//COPIAR~
function copiaLink(){
    navigator.clipboard.writeText(linkWhatszap.innerHTML).then(()=>{
        texto.innerHTML= ("Link Copiado para a área de transferência")
        alert('Copiado')
    
        })
    
    }
    
