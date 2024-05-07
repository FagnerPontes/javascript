//Editar arquivo scriptToDo.js
/*
Documentação:
getElementById: https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById
Objeto Map(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map
appendChild: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild
createElement: https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement
classList: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
style.setProperty: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
remove(): https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/remove
*/

//elementos html manipulados:
const toDoContainer = document.getElementById('toDoContainer')
const inputAdd = document.getElementById('inputAdd');
const buttonAdd = document.getElementById('buttonAdd');
const formAdd = document.getElementById('formAdd');
const formEdit = document.getElementById('formEdit');
const editContainer = document.getElementById('editContainer');
const inputEdit = document.getElementById('inputEdit');
const buttonEditConfirm = document.getElementById('buttonEditConfirm');
const buttonEditCancel = document.getElementById('buttonEditCancel');

/*
  Objeto Map -> [key, value] -> acessa o value através do key.
  ex.: var myMpar = new Map([[1, 'um'], [2, 'dois'], [3, 'três']]);
  adicionar valor: .set(key, value);
  retornar valor: .get(key);
  deletar valor: .delete(key); //atulaiza o indice.
*/
var myMap = new Map();
var myKey = '';

/* 
Código html do campo onde a atividade será inserida:
div class="divList">
  <h4>Atividade</h4>
  <button>
    <i class="fa-solid fa-pen-to-square"></i>
  </button>
  <button>
    <i class="fa-solid fa-xmark"></i>
  </button>
</div>
*/

//função que irá criar o conteúdo html da atividade
function createActivity() {
  const inputAddValue = document.getElementById('inputAdd').value;//valor do input
  if (!inputAddValue)//se o input estiver vazio
    return;//retorne
  const divList = document.createElement('div');//criar div da atividade
  const h4Activity = document.createElement('h4');//criar título da atividade
  const buttonEdit = document.createElement('button');//criar botão de edição
  const íconEdit = document.createElement('i');//criar ícone do botão de edição
  const buttonDelete = document.createElement('button');//criar botão de exclusão
  const iconDelete = document.createElement('i');//criar ícone do botão de exclusão

  h4Activity.innerText = inputAddValue;//texto do título = valor do input

  divList.classList.add('divList');//adicionar classe css divList
  íconEdit.classList.add('fa-solid', 'fa-pen-to-square');//adicionar classe de ícones
  iconDelete.classList.add('fa-solid', 'fa-xmark');//adicionar classe de ícones

  buttonDelete.appendChild(iconDelete);//iconDelete filho de buttonDelete
  buttonEdit.appendChild(íconEdit);//íconedit filho de buttonEdit
  divList.appendChild(h4Activity);//h4Activity filho de divList
  divList.appendChild(buttonEdit);//buttonEdit filho de divList
  divList.appendChild(buttonDelete);//buttonDelete filho de divList
  toDoContainer.appendChild(divList);//divList filho de toDoContainer

  buttonEdit.value = inputAddValue;//atributo value de byttonEdit = inputAddValue
  buttonDelete.value = inputAddValue;//atributo value de buttonDelete = inputAddValue
  h4Activity.value = inputAddValue;//atributo value de h4Activity = inputAddValue

  inputAdd.value = '';//resetar valor de entrada
  inputAdd.focus();//retornar o foco

  //ação do botão delete
  buttonDelete.addEventListener('click', () => {
    myKey = buttonDelete.value;//definir valor da chave do objeto Map
    myMap.delete(myKey);//remover item do objeto Map
    editContainer.style.setProperty('display', 'none');//ocultar elemento editContainer
    divList.remove(); //remover elemento divList
  })

  //ação do botão edit
  buttonEdit.addEventListener('click', () => {
    myKey = buttonEdit.value;//definir valor da chave do objeto Map
    editContainer.style.setProperty('display', 'flex');//visualizar elemento editContainer
    inputEdit.setAttribute('placeholder', myMap.get(myKey).innerText);//texto de fundo
    inputEdit.focus();//retornar o foco para inputEdit
  })
  myMap.set(inputAddValue, h4Activity);//adicionar item ao objeto Map [key, elemento_h4]
  toDoContainer.scrollTop = toDoContainer.scrollHeight;//descer scrollbar
}

formAdd.addEventListener('submit', (e) => { e.preventDefault(); });//evita o refresh da página;
formEdit.addEventListener('submit', (e) => { e.preventDefault(); });//evita o refresh da página;

//ação do botão buttonAdd -> (criar atividade) 
buttonAdd.addEventListener('click', createActivity);//executar função createActivity

//ação do botão buttonEditConfirm (confirmar edição)
buttonEditConfirm.addEventListener('click', () => {
  const myValue = inputEdit.value; //pegar valor do input
  if (myValue) {//se houver valor
    myMap.get(myKey).innerText = myValue;//peguar o valor no objeto Map através da chave
    inputEdit.value = '';//resetar valor do input
    editContainer.style.setProperty('display', 'none');//ocultar elemento editContainer
    toDoContainer.scrollTop = toDoContainer.scrollHeight;//descer scrollbar
  }
})

//ação do botão buttonEditCancel (cancelar edição)
buttonEditCancel.addEventListener('click', () => {
  editContainer.style.setProperty('display', 'none');//ocultar elemento editContainer
})
