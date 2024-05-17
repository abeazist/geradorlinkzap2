// com aspas simples
let fruta = 'Banana';

// com aspas duplas
let carro = "fusca";

// e com crase 
let capital = `João Pessoa`

//as crases tb podem serem usadas para Templates permitindo multiplas linhas
let texto = `
IIIII NEED NODERR
LOUCOOO 
MAY FRIEND
`
console.log(fruta,carro,capital,texto)
//Banana fusca João Pessoa 
//IIIII NEED NODERR
//LOUCOOO 
//MAY FRIEND

// usando o metodo toString()

let transform = 5
let nova = transform.toString()
console.log(nova)//5

//Strings JavaScript como objetos
//Normalmente, strings JavaScript são valores primitivos, criados a partir de literais:

//Mas strings também podem ser definidas como objetos com a palavra-chave new:

let y = new String("John");
console.log(y);//[String: 'John']

let frase = "O rato roeu a roupa do rei de Roma";
let novaFrase = frase.replace("rato", "gato");
console.log(novaFrase);

//METODOS STRING
let text = "HELLO WORLD";
let char = text.charCodeAt(6);
console.log(char) //W=87

const name = "W3Schools";
let letter = name.at(7);
console.log(letter)


const name1 = "W3Schools";
let letter1 = name1[2];
console.log(letter1)

let tex=''
console.log(tex[0])//undefined

let tex2=''
let letra = tex2.charAt(0)
console.log(letra)//str vazia 

//essa é a principal diferença entre [] e charAt

let frase3 = "O rato roeu a roupa do rei de Roma";
let fraseCurta = frase.slice(2, 20);
console.log(fraseCurta); 

let frutinhas = "Apple, Banana, Kiwi";
console.log(frutinhas.slice(-12));

let rato = "O rato roeu a roupa do rei de Roma";
let posicao = rato.indexOf("roeu");
console.log(posicao); // retorna 7

posicao = rato.lastIndexOf("r");
console.log(posicao); // retorna 23

//let lista =[1,2,3,4,5,6,7,8]
//console.log(lista)

let lista= ["melancia","banana",'pera','uva','jabuticaba']
let exclui = lista.pop()

console.log(lista)
console.log(exclui)
