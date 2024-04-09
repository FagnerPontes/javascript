var myBody = document.body;

//textContent -> quebra de linha não ocorre com \n:
myBody.textContent += '\ntextContent: Meu texto com aspas simples.';
myBody.textContent += "\ntextContent: Meu texto com aspas duplas.";
//textContent -> template strings não preservam quebra de linha:
myBody.textContent += `
textContent: Meu texto com crases.
Segunda linha.
Terceira linha.
`;

//innerHTML -> quebra de linha ocorre pela tag <br>:
myBody.innerHTML += '<br><br>InnerHTML: Meu texto com aspas simples.';
myBody.innerHTML += "<br>InnerHTML: Meu texto com aspas duplas.<br>";
//innerHTML -> Template strings não preservam quebra de linha:
myBody.innerHTML += `
InnerHTML: Meu texto com crases.
Segunda linha.
Terceira liha.
`;

//innerText -> quebra de linha ocorre com \n:
myBody.innerText += '\n\nInnerText: Meu texto com aspas simples.';
myBody.innerText += "\nInnerText: Meu texto com aspas duplas.";
//innerHTML -> template strings preservam quebra de linha:
myBody.innerText += `
InnerText: Meu texto com crases.
Segunda linha.
Terceira linha.
`;

//Utilização de aspas simples e aspas duplas dentro do texto
myBody.innerText += '\nSem aspas, "aspas dupas".';
myBody.innerText += "\nSem aspas, 'aspas simples'.";
myBody.innerText += `\nSem aspas, 'aspas simples', "aspas duplas".`;

var myText = 'Texto na variável';
//concatenar strings com operador +:
myBody.innerText += '\nO texto: ' + myText + ', foi inserido.';
//concatenar strings com interpolação ${} (Template Strings):
myBody.innerText += `\nO texto: ${myText}, foi inserido.`;

myBody.innerText += `
O texto: ${myText}, foi inserido.
`;

//Executar expressões e funções em string com interpolação ${}:
var myOl = document.createElement('ol');
var myList = ['primeira soma', 'segunda soma', 'terceira soma', 'quarta soma'];

function Soma(a, b) {
  return (a + b)
}

for (i = 0; i < myList.length; i++) {
  myOl.innerHTML += `<li>${myList[i]}, resultado: ${Soma(i * 3, 5)}</li>`
}
myBody.appendChild(myOl);