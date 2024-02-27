//Editar arquivo scriptTheme

//instaciar botao que mudara o tema
const buttonTheme = document.getElementById('buttonTheme');

//variavel de controle para mudar o tema
var myTheme = true;

//funcao que realiza a mudanca entre os temas
function changeTheme() {
	if (myTheme) {
		//acessando variaveis css atraves do metodo setProperty()
		document.documentElement.style.setProperty('--backColor1', '#f0f0f0');
		document.documentElement.style.setProperty('--backColor2', '#dcdcdc');
		document.documentElement.style.setProperty('--color1', '#222');
		document.documentElement.style.setProperty('--colorHover', '#000');
		document.documentElement.style.setProperty('--backgroundButton1', '#8899cc');
		document.documentElement.style.setProperty('--backgroundButton2', '#aabbff');
		document.documentElement.style.setProperty('--border1', '1px solid #c8c8c8');
	}
	else {
		document.documentElement.style.setProperty('--backColor1', '#0f0f14');
		document.documentElement.style.setProperty('--backColor2', '#19191e');
		document.documentElement.style.setProperty('--color1', '#ccc');
		document.documentElement.style.setProperty('--colorHover', '#fff');
		document.documentElement.style.setProperty('--backgroundButton1', '#223366');
		document.documentElement.style.setProperty('--backgroundButton2', '#001144');
		document.documentElement.style.setProperty('--border1', '1px solid #282828');
	}

	myTheme = !myTheme; //muda o valor da variavel myTheme
}

//evento que acionara a funcao changeTheme() ao clicar no buttonTheme
buttonTheme.addEventListener("click", changeTheme);