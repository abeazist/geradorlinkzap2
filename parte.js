const telefoneInput = document.getElementById('telefone');
const linkZap = document.querySelector('#linkzap');
const abrejanela = document.querySelector('#abrejanela');
const linkCopiado = document.querySelector('#linkCopiado');
const numeroTelefone = telefoneInput.value
const formatacao= numeroTelefone.replace(/\D/g, '');
const url = `https://wa.me/55${formatacao}`;
const abreLink = document.getElementById('abreLink');

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
 
 
 linkCopiado.addEventListener('click',() => {
    copiaLink();
 })

 abrejanela.addEventListener('click',() =>{
    abreLink.href=`https://wa.me/55${telefoneInput.value.replace(/\D/g, '')}`;
    abreLink.target="_blank";
    
 })

 telefoneInput.addEventListener('input',()=>{
    document.getElementById('texto').innerText = texto;
    texto = '';
 })



 function criaLink() {
    var numeroTelefone = telefoneInput.value;
    var texto = "Clique no link para copiar";
    var formatacao= numeroTelefone.replace(/\D/g, '')
    var linkWhatszap = `https://wa.me/55${formatacao}`;

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
    var textoParaCopiar = document.getElementById('linkCopiado').innerText;
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        document.getElementById('texto').innerText = 'Link copiado para área de transferência';
    })

}