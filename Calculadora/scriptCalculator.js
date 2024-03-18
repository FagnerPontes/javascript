const divKeys = document.querySelector('#divKeys');
const myKeys = divKeys.querySelectorAll('button');
const divDisplay = document.querySelector('#divDisplay');

var operator = '';
var argumento1 = '0';
var argumento2 = '';

function Digits(argumento) {
  if (argumento.includes('.'))
    return argumento.indexOf('.');
  return argumento.length;
}

function Decimals(argumento) {
  if (argumento.includes('.'))
    return argumento.length - argumento.indexOf('.');
  return 0;
}

function ptBR_format(argumento) {
  if (argumento == '') return '';
  let myDecimals = Decimals(argumento);
  let formatted = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: myDecimals,
    maximumFractionDigits: 7
	}).format(parseFloat(argumento));
  if (myDecimals > 0)
    return formatted.slice(0, -1);
  return formatted;
}

function showExpression() {
  divDisplay.innerText = ptBR_format(argumento1) + '\n' + operator + '\n' + ptBR_format(argumento2);
}

function AddMyValue(myValue) {
  if (operator == '') {
    if (argumento1 == '0' && myValue == '0') return;
    if (Digits(argumento1) < 15 && Decimals(argumento1) < 7)
      (argumento1 == '0') ? argumento1 = myValue : argumento1 += myValue;
	}
  else {
    if (argumento2 == '0' && myValue == '0') return;
    if (Digits(argumento2) < 15 && Decimals(argumento2) < 7)
      (argumento2 == '0') ? argumento2 = myValue : argumento2 += myValue;
  }
  showExpression();
}

function AddMyOperator(myOperator) {
  if (operator == '')
    operator = myOperator;
  showExpression();
}

function AddDecimalPoint() {
  if (operator == '') {
    if (argumento1 == '') return;
    if (!argumento1.includes('.'))
      argumento1 += '.';
	}
  else {
    if (argumento2 == '') return;
    if (!argumento2.includes('.'))
      argumento2 += '.';
	}
  showExpression();
}

function Calculate() {
  if (operator != '') {
    let operando1 = parseFloat(argumento1);
    let operando2 = parseFloat(argumento2);
    if (argumento2 != '') {
      switch (operator) {
        case '+':
          argumento1 = (operando1 + operando2).toLocaleString('en', { maximumFractionDigits: 6 }).replaceAll(',', '');
          break;
        case '-':
          argumento1 = (operando1 - operando2).toLocaleString('en', { maximumFractionDigits: 6 }).replaceAll(',', '');
          break;
        case '\u00D7':
          argumento1 = (operando1 * operando2).toLocaleString('en', { maximumFractionDigits: 6 }).replaceAll(',', '');
          break;
        case '\u00F7':
          argumento1 = (operando1 / operando2).toLocaleString('en', { maximumFractionDigits: 6 }).replaceAll(',', '');
          break;
			}
      operator = '';
      argumento2 = '';
      showExpression();
		}
	}
}

function MyErase() {
  operator = '';
  argumento1 = '0';
  argumento2 = '';
  showExpression();
}

function MyClear() {
  if (argumento2 != '')
    argumento2 = argumento2.slice(0, -1);
  else if (operator != '')
    operator = '';
  else if (argumento1 != '')
    argumento1 = argumento1.slice(0, -1);
  if (argumento1 == '')
    argumento1 = '0';
  showExpression();
}

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