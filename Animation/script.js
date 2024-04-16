//Editar arquivo script.js
//Elementos html que serão manipulados
const circle = document.getElementById("myCircle");//objeto que será animado
const divLog = document.getElementById("divLog");//campo de exibição de informações
const btStart = document.getElementById("btStart");//botão para iniciar atividade
const btCancel = document.getElementById("btCancel");//botão para cancelar atividade
let iterationCount = 1;//quantidade de vezes que a animação será executada

//Evento animationstart:
circle.addEventListener("animationstart", () => {
  divLog.innerText = 'Animation started.';//Conteúdo do divLog
});

//Evento animationiteration:
circle.addEventListener("animationiteration", () => {
  iterationCount++;//incrementar contagem de iterações
  divLog.innerText += ` Animation iterations: ${iterationCount}.`;//Conteúdo do divLog
});

//Evento animationcancel:
circle.addEventListener("animationcancel", () => {
  divLog.innerText += ' Animation canceled.';//Conteúdo do divLog
});

//Evento animationend:
circle.addEventListener("animationend", () => {
  divLog.innerText += ' Animation ended.';//Conteúdo do divLog
  circle.classList.remove("active");//remover classe responsável pela animação
});

//Ação do botão start
btStart.addEventListener("click", () => {
  divLog.innerText = "";//Conteúdo do divLog
  circle.classList.add("active");//inserir classe responsável pela animação
  iterationCount = 1;//resetar contagem de iterações
});

//Ação do botão cancel
btCancel.addEventListener("click", () => {
  circle.classList.remove("active");//remover classe responsável pela animação
});