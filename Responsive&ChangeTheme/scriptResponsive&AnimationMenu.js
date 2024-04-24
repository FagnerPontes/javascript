/*Editar arquivo scriptMenuAnimatoin.js*/
/*
Documentação recomendada:
- innerWidht
- classList
- setProperty
- resize_event
*/

//elementos maniplados:
const buttonMenuLeft = document.getElementById('buttonMenuLeft'); //botão menu esquerdo
const buttonMenuRight = document.getElementById('buttonMenuRight'); //botão menu direito
const myDivLeft = document.getElementById('myDivLeft'); //menu esquero (div)
const myDivRight = document.getElementById('myDivRight'); //menu direito (div)

//caso a largura da janela seja maior que 800px (monitor) -> iniciar menu aberto.
if (window.innerWidth >= 800) {
  myDivLeft.classList.add('open');
  myDivRight.classList.add('open');
  document.documentElement.style.setProperty('--menuWidth', '16rem');
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
    document.documentElement.style.setProperty('--menuWidth', '16rem'); //variável css (--menuWidth):
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
  myButton.disabled = false; //ative o botão do menu.
}

//função acionada quando os botões dos menus forem clicados
function SliceMenu(myDivMenu1, myDivMenu2) {
  // se o menu estiver aberto feche o menu, se não, abra o menu:
  (myDivMenu1.classList.contains('open')) ?
    myDivMenu1.classList.add('closeDivMenu') :
    myDivMenu1.classList.add('openDivMenu');
  if (window.innerWidth < 800) { //se for mobile:
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
});

//evento ao clicar no botão do menu direito:
buttonMenuRight.addEventListener('click', () => {
  SliceMenu(myDivRight, myDivLeft); //executar SliceMenu()
}); 
