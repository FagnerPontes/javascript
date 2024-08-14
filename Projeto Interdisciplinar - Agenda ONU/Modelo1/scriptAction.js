/*Editar arquivo scriptMenuAnimatoin.js*/
/*
Documentação recomendada:
- innerWidht
- classList
- setProperty
- resize_event
*/

//elementos maniplados:
const buttonMenuLeft = document.getElementById('buttonMenuLeft');
const buttonMenuRight = document.getElementById('buttonMenuRight');
const myDivLeft = document.getElementById('myDivLeft');
const myDivRight = document.getElementById('myDivRight');
const pHeader = document.getElementById('pHeader')

//caso a largura da janela seja maior que 800px (monitor) -> iniciar menu aberto.
if (window.innerWidth >= 800) {
  myDivLeft.classList.add('open');
  myDivRight.classList.add('open');
  document.documentElement.style.setProperty('--menuWidth', '18rem');
}
//caso a largura da janela seja menor que 800px (mobile)) -> iniciar menu fechado
else {
  myDivLeft.classList.add('close'); //adicionar classe (.close) ao menu esquerdo
  myDivRight.classList.add('close'); //adicionar classe (.close) ao menu direito
  document.documentElement.style.setProperty('--menuWidth', '100%'); //variável css (--menuWidth):
}

// Modificar layout da página caso seja redimencionada -> evento(resize)
onresize = (event) => {
  //caso a largura da janela seja menor que 800px (mobile) -> fechar os menus
  if (event.target.innerWidth < 800) {
    myDivLeft.classList.replace('open', 'close'); //substituir .open por .close
    myDivRight.classList.replace('open', 'close'); //substituir .open por .close
    document.documentElement.style.setProperty('--menuWidth', '100%'); //variável css (--menuWidth):
  }
  //caso a largura da janela seja maoir que 800px (monitor) -> abrir os menus
  else {
    myDivLeft.classList.replace('close', 'open'); //substituir .close por .open
    myDivRight.classList.replace('close', 'open'); //substituir .close por .open
    document.documentElement.style.setProperty('--menuWidth', '18rem'); //variável css (--menuWidth):
  }
};

//função para o encerramento da animação (abertura/fechamento) dos menus:
function AnimationEnd(myDivMenu, myButton) {
  // se o menu foi fechado remova .closeDivMenu, se não, remova .openDivMenu:
  (myDivMenu.classList.contains('closeDivMenu')) ?
    myDivMenu.classList.remove('closeDivMenu') :
    myDivMenu.classList.remove('openDivMenu');
  // se o menu possuir .open substitua por .colse, se não, substitua por .open:
  (myDivMenu.classList.contains('open')) ?
    myDivMenu.classList.replace('open', 'close') :
    myDivMenu.classList.replace('close', 'open');

  myButton.disabled = false; //ativando o botão;
}

//função acionada quando os botões dos menus forem clicados
function SliceMenu(myDivMenu1, myDivMenu2) {
  // se o menu estiver aberto feche o menu, se não, abra o menu:
  (myDivMenu1.classList.contains('open')) ?
    myDivMenu1.classList.add('closeDivMenu') :
    myDivMenu1.classList.add('openDivMenu');

  if (window.innerWidth < 800) {//se for mobile
    if (myDivMenu2.classList.contains('open')) //verifique se o outro menu está aberto
      myDivMenu2.classList.add('closeDivMenu'); //feche o outro menu
  }
}

//eventos de animação para o menu esquerdo:
myDivLeft.addEventListener('animationstart', () => {
  buttonMenuLeft.disabled = true; //desativar botão do menu
});

myDivLeft.addEventListener('animationend', () => {
  AnimationEnd(myDivLeft, buttonMenuLeft); //executar AnimationEnd()
});

//eventos de animação para o menu direito:
myDivRight.addEventListener('animationstart', () => {
  buttonMenuRight.disabled = true; //desativar botão do menu
});

myDivRight.addEventListener('animationend', () => {
  AnimationEnd(myDivRight, buttonMenuRight); //executar AnimationEnd()
});

//evento ao clicar no botão do menu esquerdo:
buttonMenuLeft.addEventListener('click', () => {
  SliceMenu(myDivLeft, myDivRight); //executar SliceMenu()
})

//evento ao clicar no botão do menu direito:
buttonMenuRight.addEventListener('click', () => {
  SliceMenu(myDivRight, myDivLeft); //executar SliceMenu()
})


//---------------------------------------------------------
// Configurar demais elementos que irão compor a página:
//---------------------------------------------------------
const divCenter = document.getElementById('myDivCenter');
const buttonHome = document.getElementById('buttonHome');
const pHome = document.createElement('p');

var buttonsODS = new Array();
var icons = new Array();
var spans = new Array();
var divCenterContent = new Array();
var divChildTop = new Array();
var divChildLeft = new Array();
var divChildRight = new Array();
var paragrafos = new Array();
var forms = new Array();
var textAreas = new Array();
var buttonForm = new Array();
var h2ChildLeft = new Array();
var h2ChildRight = new Array();

/*criar elementos que serão utilizados na página*/
for (var i = 0; i < 17; i++) {
  buttonsODS.push(document.createElement('button'));
  icons.push(document.createElement('img'));
  spans.push(document.createElement('span'));
  divCenterContent.push(document.createElement('div'));
  divChildTop.push(document.createElement('div'));
  divChildLeft.push(document.createElement('div'));
  divChildRight.push(document.createElement('div'));
  h2ChildLeft.push(document.createElement('h2'));
  h2ChildRight.push(document.createElement('h2'));
  paragrafos.push(document.createElement('p'));
  forms.push(document.createElement('form'));
  textAreas.push(document.createElement('textarea'));
  buttonForm.push(document.createElement('button'));
}

// Adicionar propriedades e atributos ao elementos criados:
for (var i = 0; i < 17; i++) {
  icons[i].setAttribute('src', `Icons\\${i + 1}.png`);
  spans[i].innerText = buttonsName[i];
  textAreas[i].setAttribute('placeholder', "Digite sua mensagem"); //texto de fundo
  textAreas[i].setAttribute('maxlength', "3000"); // máximo de caracteres
  textAreas[i].setAttribute('rows', "4"); //quantidade de linhas
  buttonForm[i].innerText = 'Enviar Mensagem'; //texto do botão
  forms[i].addEventListener('submit', (e) => { e.preventDefault(); }); //evitar refresh da página
  divChildTop[i].innerHTML = `<h1>${buttonsName[i]}</h1>`; // título da div
  h2ChildLeft[i].innerText = tituloChildLeft; //título da divChildCenter
  h2ChildRight[i].innerText = tituloChildRight; //título da divChildBottom
  divChildTop[i].setAttribute('class', "divChildTop"); //adicionar a classe .divChildTop
  divChildLeft[i].setAttribute('class', "divChildLeft"); //adicionar a classe .divChildCenter
  divChildRight[i].setAttribute('class', "divChildRight"); //adicionar a classe .divchildbottom
  divCenterContent[i].setAttribute('class', "divCenterContent"); //adicionar a classe .divCenterContent
}

// Atribuir aos elementos os seus respectivos nós:
for (var i = 0; i < 17; i++) {
  buttonsODS[i].append(icons[i]);
  buttonsODS[i].append(spans[i]);
  forms[i].append(textAreas[i]);
  divChildLeft[i].append(h2ChildLeft[i]);
  divChildRight[i].append(h2ChildRight[i]);
  divChildRight[i].append(forms[i])
  divChildRight[i].append(buttonForm[i])
  myDivLeft.append(buttonsODS[i]);
  divChildTop[i].append(paragrafos[i]);
  divCenterContent[i].append(divChildTop[i]);
  divCenterContent[i].append(divChildLeft[i]);
  divCenterContent[i].append(divChildRight[i]);
  divCenter.append(divCenterContent[i]);
}
paragrafos.push(document.createElement('p'));
divChildTop.push(document.createElement('div'));

/*Criar divChildTop para o botão home*/
/*Adicionar textos aos parágrados das divChildTop*/
divChildTop[divChildTop.length - 1].innerHTML = `<h1>${titulo_Home}</h1>`;
paragrafos.forEach(element => {
  var i = paragrafos.indexOf(element);
  element.innerText = meusTextos[i];
});
divChildTop[divChildTop.length - 1].append(paragrafos[paragrafos.length - 1]);
divChildTop[divChildTop.length - 1].setAttribute('class', "divChildTop");

/*Criar divCenterContent para receber o divChildTop do botão home*/
divCenterContent.push(document.createElement('div'));
divCenterContent[divChildTop.length - 1].setAttribute('class', "divCenterContent");
divCenterContent[divChildTop.length - 1].append(divChildTop[divChildTop.length - 1]);

/*adicionar divCenterContent do botão home à divCenter*/
divCenter.append(divCenterContent[divChildTop.length - 1]);

/*Adicionar botão home a lista de botões*/
buttonsODS.push(buttonHome);

/*função responsável por ativar painel relacionado ao botão clicado*/
function activeContentArea(myContentArea) {
  divCenterContent.forEach(element => {
    element.style.setProperty('display', 'none');
  });
  myContentArea.style.setProperty('display', 'flex');
  if (window.innerWidth < 800) {
    if (myDivLeft.classList.contains('open'))
      myDivLeft.classList.add('closeDivMenu');
  }
}

/*Ações dos botões do menu esquerdo e botão home*/
buttonsODS.forEach(element => {
  element.addEventListener('click', () => {
    if (element === buttonHome) {
      window.location.reload();
    }
    else {
      var i = buttonsODS.indexOf(element);
      activeContentArea(divCenterContent[i]);
    }
  })
});

/* Adicionar chekbox às divChildCenter*/
divChildLeft.forEach(divElement => {
  var i = divChildLeft.indexOf(divElement);
  if (i < 17) {
    entidades[i].forEach(myString => {
      var j = entidades[i].indexOf(myString);
      divElement.innerHTML += `
      <div>
        <input type="checkbox" id="${i}${j}" name="${i}${j}" value="${myString}">
        <label for="${i}${j}">${myString}</label><br>
      </div>
      `;
    });
  }
});

/*pegar checkbox selecionados dentro do painel aberto*/
function getCheckboxValues(myDiv) {
  var pacote = myDiv.querySelectorAll('div > input');
  var values = [];
  var myString = 'Sua mensagem foi emviada para:\n';
  for (var i = 0; i < pacote.length; i++) {
    if (pacote[i].checked) {
      values.push(pacote[i].value);
      myString += `${pacote[i].value}.\n`;
    }
  }
  if (values.length > 0)
    return myString;
  else
    return atencao1;
}

/*Ações dos botões dentro das divChildBottom (Enviar mensagens)*/
buttonForm.forEach(button => {
  button.addEventListener('click', () => {
    var i = buttonForm.indexOf(button);
    if (textAreas[i].value != '') {
      texto = getCheckboxValues(divChildLeft[i]);
      alert(texto);
      if (texto != atencao1)
        window.location.reload();
    }
    else
      alert(atencao2);
  })
});


/*texto no parágrafo do cabeçalho*/
pHeader.innerText = texto_pHeader;

/*Preenchendo divRigth*/
myDivRight.append(document.createElement('h1'));
myDivRight.append(document.createElement('p'));
myDivRight.querySelector('h1').innerText = tituloDivRight;
myDivRight.querySelector('p').innerText = `${Informacoes}${Equipe}`;

activeContentArea(divCenterContent[17]);