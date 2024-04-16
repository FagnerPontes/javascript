//Elementos manipulados:
var myDiv = document.getElementById('myDiv');
var pLog = document.getElementById('pLog');

/*
 Manipulação com style.property:
 - style.property: atributos no formato lowerCamelCase: background-color -> backgroundColor
 - Não acessa estilos definidos na tag head nem em arquivos externos!
 - Aplica estilos diretamente a tag!
*/

//exemplos com style.property:
pLog.innerText = 'Exemplos com style.property:\n'
//pegando valor diretamente da tag:
if (myDiv.style.fontSize != '')
 pLog.innerText += myDiv.style.fontSize;
else
 pLog.innerText += 'fontSize não encontrado';

//tentando acessar arquivo externo com style.property (Não funciona):
if (myDiv.style.borderRadius != '')
 pLog.innerText += `.\n ${myDiv.style.borderRadius}`;
else
 pLog.innerText += '.\n borderRadius não encontrado';

//tentando acessar estilo da tag head com style.property (Não funciona):
if (myDiv.style.height != '')
 pLog.innerText += `.\n ${myDiv.style.height}`;
else
 pLog.innerText += '.\n height não encontrado';

//Aplicando valor com style.property:
pLog.style.backgroundColor = 'yellow';

/*
 Manipulação com setPropert('propriedade', 'valor') e getPropertValur('propriedade'):
 - Acessa estilos definidos na tag head, arquivos externos e aplicados diretamente a tag!
 - Para acessar estilos em arquivos externos ou na tag head através do método
   getPropertValur('propriedade') é necessário pegar o estilo computado através do 
   método getComputedStyle(element).
*/
pLog.innerText += '\nExemplos com getPropertValur("propriedade"):'
//acessando stilos diretamente da tag com getPropertValur('propriedade'):
if (myDiv.style.getPropertyValue('font-size') != '')
 pLog.innerText += `\n ${myDiv.style.getPropertyValue('font-size')}`;
else
 pLog.innerText += '\n font-size não encontrado';

//acesando estilo em arquivo externo com getPropertValur('propriedade'):
if (getComputedStyle(myDiv).getPropertyValue('border-radius') != '')
 pLog.innerText += `.\n ${getComputedStyle(myDiv).getPropertyValue('border-radius')}`;
else
 pLog.innerText += '.\n borderRadius não encontrado';

//tentando acessar estilo da tag head com getPropertValur('propriedade'):
if (getComputedStyle(myDiv).getPropertyValue('height') != '')
 pLog.innerText += `.\n ${getComputedStyle(myDiv).getPropertyValue('height')}`;
else
 pLog.innerText += '.\n height não encontrado';

// Descobrir valor da variável css: (Descobrir valor de --backColor)
var b = getComputedStyle(document.documentElement).getPropertyValue("--backColor");
pLog.innerText += `.\n ${b}`;

// Mudar variavel ou propriedade CSS em todos os elementos que possuem a propriedade:
document.documentElement.style.setProperty('--backColor', '#440044')

// Atribuir valor da variável em elemento específico com setProperty:
// document.body.style.setProperty('border', "--myBorder"); //erro 
document.body.style.setProperty('border', 'var(--myBorder)');