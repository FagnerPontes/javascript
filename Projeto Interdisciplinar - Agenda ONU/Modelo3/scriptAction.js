/*Editar arquivo scriptMenuAnimatoin.js*/

//---------------------------------------------------------
// Configurar elementos que irão compor a página:
//---------------------------------------------------------
const pHeader = document.getElementById('pHeader')
const divCenter = document.getElementById('myDivCenter');
const pHome = document.createElement('p');
const divChildHome = document.createElement('div');

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
var divDropdown = new Array();
var divIconArrow = new Array();
var iconsArrow = new Array();


/*Atribuir classe para divChildHome*/
divChildHome.setAttribute('class', 'divChildHome')

/*criar elementos que serão utilizados na página*/
for (var i = 0; i < 17; i++) {
  buttonsODS.push(document.createElement('button'));
  icons.push(document.createElement('img'));
  spans.push(document.createElement('span'));
  divIconArrow.push(document.createElement('div'));
  iconsArrow.push(document.createElement('i'));
  divDropdown.push(document.createElement('div'));
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
  iconsArrow[i].setAttribute('class', 'bi bi-chevron-down');
  iconsArrow[i].classList.add('retornar')
  textAreas[i].setAttribute('placeholder', "Digite sua mensagem"); //texto de fundo
  textAreas[i].setAttribute('maxlength', "3000"); // máximo de caracteres
  textAreas[i].setAttribute('rows', "4"); //quantidade de linhas
  buttonForm[i].innerText = 'Enviar Mensagem'; //texto do botão
  forms[i].addEventListener('submit', (e) => { e.preventDefault(); }); //evitar refresh da página
  h2ChildLeft[i].innerText = tituloChildLeft; //título da divChildCenter
  h2ChildRight[i].innerText = tituloChildRight; //título da divChildBottom
  divChildTop[i].setAttribute('class', "divChildTop"); //adicionar a classe .divChildTop
  divChildLeft[i].setAttribute('class', "divChildLeft"); //adicionar a classe .divChildCenter
  divChildRight[i].setAttribute('class', "divChildRight"); //adicionar a classe .divchildbottom
  divCenterContent[i].setAttribute('class', "divCenterContent"); //adicionar a classe .divCenterContent
  divCenterContent[i].classList.add('close');
  divDropdown[i].setAttribute('class', "divDropdown");
}

divCenter.append(divChildHome);

// Atribuir aos elementos os seus respectivos nós:
for (var i = 0; i < 17; i++) {
  forms[i].append(textAreas[i]);
  divIconArrow[i].append(iconsArrow[i]);
  buttonsODS[i].append(icons[i]);
  buttonsODS[i].append(spans[i]);
  buttonsODS[i].append(divIconArrow[i]);
  divChildLeft[i].append(h2ChildLeft[i]);
  divChildRight[i].append(h2ChildRight[i]);
  divChildRight[i].append(forms[i])
  divChildRight[i].append(buttonForm[i])
  divChildTop[i].append(paragrafos[i]);
  divCenterContent[i].append(divChildTop[i]);
  divCenterContent[i].append(divChildLeft[i]);
  divCenterContent[i].append(divChildRight[i]);
  divDropdown[i].append(buttonsODS[i]);
  divDropdown[i].append(divCenterContent[i]);
  divCenter.append(divDropdown[i]);
}


/*Criar divChildTop-home para o botão home*/
divChildTop.push(document.createElement('div'));
/*Criar parágrafo para divChildTop-home*/
paragrafos.push(document.createElement('p'));
/*título da divChildTop-home*/
divChildTop[divChildTop.length - 1].innerHTML = `<h1>${titulo_Home}</h1>`;
/*Add parágrado da divChildTop-home*/
divChildTop[divChildTop.length - 1].append(paragrafos[paragrafos.length - 1]);
/*Atribuir classe .divChildTop para divChildTop-home*/
divChildTop[divChildTop.length - 1].setAttribute('class', "divChildTop");

divChildHome.append(divChildTop[divChildTop.length - 1]);

/*Adicionar textos aos parágrados das divChildTop*/
paragrafos.forEach(element => {
  var i = paragrafos.indexOf(element);
  element.innerText = meusTextos[i];
});

/*função responsável por ativar painel relacionado ao botão clicado*/
function activeContentArea(myContentArea) {
  divCenterContent.forEach(element => {
    if (element !== myContentArea) {
      if (element.classList.contains('open'))
        element.classList.replace('open', 'close');
    }
    else {
      (myContentArea.classList.contains('open')) ?
        myContentArea.classList.replace('open', 'close') :
        myContentArea.classList.replace('close', 'open');
    }
  });
}

/*Ações dos botões do menu esquerdo e botão home*/
buttonsODS.forEach(element => {
  element.addEventListener('click', () => {
    var i = buttonsODS.indexOf(element);
    var icon = element.querySelector('i');
    iconsArrow.forEach(myIcon => {
      if (myIcon !== icon) {
        myIcon.classList.replace('rotacionar', 'retornar');
      }
    });
    (icon.classList.contains('retornar')) ?
      icon.classList.replace('retornar', 'rotacionar') :
      icon.classList.replace('rotacionar', 'retornar');
    icon.classList.add('rotacionar');
    activeContentArea(divCenterContent[i]);
    var scrollTop = divCenter.scrollTop;
    var posicaoY = element.getBoundingClientRect().top + scrollTop - 60;
    divCenter.scrollTop = posicaoY;
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