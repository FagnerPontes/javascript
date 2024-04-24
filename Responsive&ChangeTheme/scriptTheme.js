//Botão que irá realizar a mudança de tema:
/* 
!!!Atenção!!!
 Para o navegador armazenar o Cookie ele deve estar em um servidor!
 Utilize o Live Server no vsCode para textar o código!!!
*/
const buttonTheme = document.getElementById('buttonTheme');

var myTheme = '';//variável com informação sobre o tema escolhido

//Caso exista um Cookie com a informação sobre o tema:
if (getCookie("theme") != '') {
  myTheme = getCookie('theme');//Variável myThem = valor do Cookie
  if (myTheme == 'dark') {//caso o valor seja dark -> Aplicar o tema dark;
    document.documentElement.style.setProperty('--backColor1', '#0f0f14');
    document.documentElement.style.setProperty('--backColor2', '#19191e');
    document.documentElement.style.setProperty('--color1', '#ccc');
    document.documentElement.style.setProperty('--colorHover', '#fff');
    document.documentElement.style.setProperty('--border1', '2px solid #282828');
  }
  else if (myTheme == 'light') {//caso o valor seja light, Aplicar o tema light;
    document.documentElement.style.setProperty('--backColor1', '#f0f0f0');
    document.documentElement.style.setProperty('--backColor2', '#dcdcdc');
    document.documentElement.style.setProperty('--color1', '#222');
    document.documentElement.style.setProperty('--colorHover', '#000');
    document.documentElement.style.setProperty('--border1', '2px solid #c8c8c8');
  }
}
else {//Senão existir Cookie 
  myTheme = 'dark';//defiir valor padrão.
}

function changeTheme() {
  if (myTheme == 'dark') {
    //acessando variaveis css através do metodo setProperty()
    document.documentElement.style.setProperty('--backColor1', '#f0f0f0');
    document.documentElement.style.setProperty('--backColor2', '#dcdcdc');
    document.documentElement.style.setProperty('--color1', '#222');
    document.documentElement.style.setProperty('--colorHover', '#000');
    document.documentElement.style.setProperty('--border1', '2px solid #c8c8c8');
    myTheme = 'light';//defiir novo valor
    setCookie('theme', 'light', 365);//criar Cookei para armazenar informação
  }
  else if (myTheme == 'light') {
    //acessando variaveis css através do metodo setProperty()
    document.documentElement.style.setProperty('--backColor1', '#0f0f14');
    document.documentElement.style.setProperty('--backColor2', '#19191e');
    document.documentElement.style.setProperty('--color1', '#ccc');
    document.documentElement.style.setProperty('--colorHover', '#fff');
    document.documentElement.style.setProperty('--border1', '2px solid #282828');
    myTheme = 'dark';//defiir novo valor.
    setCookie('theme', 'dark', 365);//criar Cookei para armazenar informação
  }
}
//Evento responsável por executar a mudança do tema:
buttonTheme.addEventListener("click", changeTheme);
