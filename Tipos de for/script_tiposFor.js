var meuArray = ['Amarelo', 'Verde', 'Vermelho', 'Azul'];
myBody = document.body;

//laço for tradicional
myBody.innerText += 'laço for tradicional:\n';
for (var i = 0; i < meuArray.length; i++) {
  index = i;
  element = meuArray[i];
  myBody.innerText += element + ', ' + index + '\n';
}

//For para percorrer array.
myBody.innerText += '\nforEach:\n';
meuArray.forEach(i => {
  element = i;
  index = meuArray.indexOf(i);
  myBody.innerText += element + ', ' + index + '\n';
})

//for...in itera sobre as propriedade enumerávei de um objeto
//(no caso dos arrays serão os índices que são propriededes reais dos arrays) 
myBody.innerText += '\nfor...in:\n';
for (var i in meuArray) {
  index = i;
  element = meuArray[i];
  myBody.innerText += element + ', ' + index + '\n';
}

//for...of itera sobre os valores enumeráveis de um objeto
myBody.innerText += '\nfor...of:\n';
for (var i of meuArray) {
  element = i;
  index = meuArray.indexOf(i);
  myBody.innerText += element + ', ' + index + '\n';
}

/*Criação de objeto*/
var Personagem = {
  Genero: 'Masculino',
  Habilidade: 'Distancia',
  Especie: 'Elfo',
  Equipamento: function () {
    if (this.Habilidade == 'Distancia') { return 'Arco curto'; }
    else if (this.Habilidade == 'Corpo a corpo') { return 'Espada curta'; }
  }
};


//for...in para percorrer objetos iterando sobre as propriedade
myBody.innerText += '\nfor...in para percorrer objetos\n';
for (const i in Personagem) {
  if (i == 'Equipamento') {//Equipamento é uma função. Deve-se usar () após a chamada
    myBody.innerText += i + " = " + Personagem[i]() + "\n";
    continue; //interrompe o laço e continua na próxima iteração
  }
  i + " = " + Personagem.Equipamento() + "\n";
  myBody.innerText += i + " = " + Personagem[i] + "\n";
}