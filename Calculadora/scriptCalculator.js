//Editar arquivo scriptCalculator.js

/*
  - querySelector: https://developer.mozilla.org/docs/Web/API/Document/querySelector
  - Objeto String:
    - includes(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes
    - indexOf(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
    - slice(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice
  - parseFloat: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
  - toLocaleString: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
  - Intl.NumberFormat: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
*/

//elementos html que serão manipulados
const divKeys = document.querySelector('#divKeys');
const myKeys = divKeys.querySelectorAll('button'); //NodeList com todos os botões
const divDisplay = document.querySelector('#divDisplay'); //display da calculadora

// cálculo: (argumanto1 operador argumento2).
// Formatação numérica pt-BR;
// limite de 15 dígitos. (limite de precisão do js)
// limite de 6 casas decimais.

//operador e operandos matemáticos:
var operator = '';
var argumento1 = '0';
var argumento2 = '';

//função para limitar a quantidade de dígitos:
function Digits(argumento) {
  if (argumento.includes('.')) //se em argumento existir o char('.')
    return argumento.indexOf('.'); //retorne a posição do char('.')
  return argumento.length; //senão, retorne o tamanho total
}

//função para limitar a quantidade de decimais:
function Decimals(argumento) {
  if (argumento.includes('.')) //se em argumento existir o char('.')
    return argumento.length - argumento.indexOf('.'); //retorne o tamanho total - posição do char('.')
  return 0; //senão, retorne 0
}

//função para formatar os números (argumentos) no padrão pt-BR:
function ptBR_format(argumento) {
  if (argumento == '') return ''; //se argumento for vazio retorne vazio, senão, continue
  let myDecimals = Decimals(argumento); //quantidade de casas decimais
  let formatted = new Intl.NumberFormat('pt-BR', { //número formatado em pt-BR
    minimumFractionDigits: myDecimals, //quantidade mínima de casas decimais
    maximumFractionDigits: 7 //quantidade máxima de casas decimais (uma a mais que o necessário)
  }).format(parseFloat(argumento)); // converter string em number e aplicar formatação
  if (myDecimals > 0) //Se houver casas decimais
    return formatted.slice(0, -1); //retorne uma substring sem a ultima casa decimal
  return formatted; //senão, retorne o número formatado
}

//função que exibirá os valores digitados na tela:
function showExpression() {
  divDisplay.innerText = ptBR_format(argumento1) + '\n' + operator + '\n' + ptBR_format(argumento2);
}

//função para pegar o valor do número clicado e adicionar aos argumentos:
function AddMyValue(myValue) {
  if (operator == '') { //se operador for vazio
    if (argumento1 == '0' && myValue == '0') return; //se argumento1 = myValue = 0 retorne, senão, continue
    //se quantidade de digitos menor que 15 e decimais menor que 7
    if (Digits(argumento1) < 15 && Decimals(argumento1) < 7)
      //se argumento1 = 0, faça: agumento1 = myValue, senão, faça: agumento1 = agumento1 + myValue
      (argumento1 == '0') ? argumento1 = myValue : argumento1 += myValue;
  }
  else { //se operador não for vazio
    if (argumento2 == '0' && myValue == '0') return; //se argumento2 = myValue = 0 retorne, senão, continue
    //se quantidade de digitos menor que 15 e decimais menor que 7
    if (Digits(argumento2) < 15 && Decimals(argumento2) < 7)
      //se argumento2 = 0, faça: agumento2 = myValue, senão, faça: agumento2 = agumento2 + myValue
      (argumento2 == '0') ? argumento2 = myValue : argumento2 += myValue;
  }
  showExpression(); //mostre na tela
}

//função para pegar o operador matemático:
function AddMyOperator(myOperator) {
  if (operator == '')  //se operador for vazio
    operator = myOperator;
  showExpression(); //mostre na tela
}

//função para adicionar o ponto decimal:
function AddDecimalPoint() {
  if (operator == '') { //se operador for vazio
    if (argumento1 == '') return; //se argumento1 for vazio retorne, senão, continue
    if (!argumento1.includes('.')) //se não possuir char('.')
      argumento1 += '.'; //adicione o char('.') na string
  }
  else { //se operador não for vazio
    if (argumento2 == '')
      argumento2 = '0.';
    if (!argumento2.includes('.')) //se não possuir char('.')
      argumento2 += '.'; //adicione o char('.') na string
  }
  showExpression(); //mostre na tela
}

//função para executar o cálculo:
function Calculate() {
  if (operator != '') {
    let operando1 = parseFloat(argumento1); //transformar string em number
    let operando2 = parseFloat(argumento2); //transformar string em number
    if (argumento2 != '') {
      switch (operator) {
        //O método toLocaleString() será utilizado para corrigir problemas de imprecisões!
        case '+': //realize a soma e passe o resultado para argumento1 como uma string
          argumento1 = (operando1 + operando2).toLocaleString('en', { maximumFractionDigits: 6 }).replaceAll(',', '');
          break;
        case '-': //realize a subtração e passe o resultado para argumento1 como uma string
          argumento1 = (operando1 - operando2).toLocaleString('en', { maximumFractionDigits: 6 }).replaceAll(',', '');
          break;
        case '\u00D7': //realize a multiplicação e passe o resultado para argumento1 como uma string
          argumento1 = (operando1 * operando2).toLocaleString('en', { maximumFractionDigits: 6 }).replaceAll(',', '');
          break;
        case '\u00F7': //realize a divisão e passe o resultado para argumento1 como uma string
          argumento1 = (operando1 / operando2).toLocaleString('en', { maximumFractionDigits: 6 }).replaceAll(',', '');
          break;
      }
      operator = ''; //operador = vazio
      argumento2 = ''; //argumento2 = vazio
      showExpression(); //mostre o resultado na tela
    }
  }
}

//função para limpar todo conteúdo digitado:
function MyErase() {
  operator = '';
  argumento1 = '0';
  argumento2 = '';
  showExpression();
}

//função para apagar o último elemento digitado:
function MyClear() {
  if (argumento2 != '') //Se argumento2 não for vazio
    argumento2 = argumento2.slice(0, -1); //remova o último elemento
  else if (operator != '')
    operator = '';
  else if (argumento1 != '')
    argumento1 = argumento1.slice(0, -1); //remova o último elemento
  if (argumento1 == '')
    argumento1 = '0';
  showExpression();
}

//função para os eventos do mouse: 
myKeys.forEach(element => {
  let myValue = element.value;
  if ('0123456789'.includes(myValue)) {
    element.addEventListener('click', () => { AddMyValue(myValue); })
  }
  else {
    switch (myValue) {
      case 'plus':
        element.addEventListener('click', () => { AddMyOperator('+'); })
        break;
      case 'minus':
        element.addEventListener('click', () => { AddMyOperator('-'); })
        break;
      case 'mult':
        element.addEventListener('click', () => { AddMyOperator('\u00D7'); })
        break;
      case 'divide':
        element.addEventListener('click', () => { AddMyOperator('\u00F7'); })
        break;
      case 'clear':
        element.addEventListener('click', () => { MyClear(); })
        break;
      case 'decimal':
        element.addEventListener('click', () => { AddDecimalPoint(); })
        break;
      case 'erase':
        element.addEventListener('click', () => { MyErase(); })
        break;
      case 'calculate':
        element.addEventListener('click', () => { Calculate(); })
        break;
    }
  }
});

//função para os eventos do teclado:
document.addEventListener('keydown', (event) => {
  let myValue = event.key;
  if ('0123456789'.includes(myValue)) {
    AddMyValue(myValue);
    myKeys.forEach(element => {
      if (element.value == myValue)
        element.focus();
    });
  }
  else {
    switch (myValue) {
      case '+':
        AddMyOperator('+');
        myKeys[3].focus();
        break;
      case '-':
        AddMyOperator('-');
        myKeys[7].focus();
        break;
      case '*':
        AddMyOperator('\u00D7');
        myKeys[11].focus();
        break;
      case '/':
        AddMyOperator('\u00F7');
        myKeys[15].focus();
        break;
      case 'Backspace':
        MyClear();
        myKeys[12].focus();
        break;
      case ',':
        AddDecimalPoint();
        myKeys[14].focus();
        break;
      case 'Escape':
        MyErase();
        myKeys[16].focus();
        break;
      case 'Enter':
        Calculate();
        myKeys[17].focus();
        break;
    }
  }
});