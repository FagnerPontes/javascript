//Editar arquivo scriptMachineLearning.js

/*
Documentação:
  TensorFlow.js: https://www.tensorflow.org/?hl=pt-br
*/

//Dados para treinamento: (y = 3x)
var x = [0, 1, 2, 3, 4, 5];
var y = [0, 3, 6, 9, 12, 15];
const myDiv = document.getElementById('myDiv');

async function MachineLearning(inputValue) {
  //Modelo simples.
  const model = tf.sequential();//camadas em sequencia.

  model.add(tf.layers.dense({//camadas totalmente conectadas
    units: 1,//uma camada
    inputShape: [1]//uma entrada
  }));

  model.compile({//Preparação para treinamento:
    loss: 'meanSquaredError',//perda = erro quadrático médio
    optimizer: 'sgd'//otimização = otimizador de gradiente descendente
  });

  const xs = tf.tensor2d(x, [x.length, 1]);//matriz(dados = [dados], forma = [linhas, colunas])
  const ys = tf.tensor2d(y, [y.length, 1]);//matriz(dados = [dados], forma = [linhas, colunas])

  //Treinamento do modelo: await -> execução assíncrona do treinamento.
  await model.fit(xs, ys, { epochs: 500 });//treinamento fixo, entrada = x, saida = y, 500 iterações

  //definir resultado do treinamento como sendo do tipo Number:
  let result = new Number(model.predict(tf.tensor2d([inputValue], [1, 1])).dataSync());

  //visualizar resultado:
  myDiv.innerText = `Resultado da rede neural: ${result}
  Resultado esperado: ${3 * inputValue}
  \nGráfico: (x, y)`;

  x.push(inputValue);//atualizar array x;
  y.push(parseFloat(result.toFixed(2)));//limitar casas decimais do resultado e atualizar array y.

  //visualizar coordenadas gráficas:
  for (var i = 0; i < x.length; i++) {
    myDiv.innerText += `, (${x[i]}, ${y[i]})`
  }
}

BarChart('myChart', x, y);//Gráfico inicial

//elementos do formulário:
var form = document.getElementById('myForm');
var myInput = document.getElementById('myInput');

myInput.value = '5';//iniciar formulário com último valor do array x

//evento para chamar MachineLearning e atualizar o gráfico:
form.addEventListener('submit', async function (e) {
  e.preventDefault();//impede o envio do form (refresh)
  await MachineLearning(parseFloat(myInput.value));//myInput = <input value> 
  UpdateChart(x, y);//atualizar o gráfico
});
