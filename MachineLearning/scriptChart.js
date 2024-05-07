//Editar arquivo scriptChart.js

/*
Documentação:
  chart.js: https://www.chartjs.org/
*/

var myChart;//variável que representa o gráfico

//função para criação do gráfico
function BarChart(id, xValues, yValues) {//local do grafico e valores dos eixos x e y
  myChart = new Chart(id, {//objeto gráfico
    type: "bar",//gráfico tipo barra vertical
    data: {//configuração do campo de dados
      labels: xValues,//valores do eixo x
      datasets: [{//configurações dos elementos gráficos
        label: 'Gráfico',//título do gráfico
        backgroundColor: "rgba(110,110,60,1.0)",//cor das barras
        borderColor: "rgba(255,255,0, 0.8)",//cor da borda das barras
        borderWidth: 5,//largura das bordas das barras
        data: yValues//valores do eixo y
      }],
    },
    options: {//configurações do gráfico
      scales: {
        x: {
          grid: {
            color: "rgba(125,125,125,0.3)",//cor das linhas horizontais
          }
        },
        y: {
          grid: {
            color: "rgba(125,125,125,1.0)",//cor das linhas verticais
          }
        }
      }
    }
  });
}

//função para atualização do gráfico
function UpdateChart(xValues, yValues) {//valores dos eixos x e y
  myChart.data.labels = xValues;//atualizar valores do eixo x
  myChart.data.datasets.forEach((dataset) => {
    dataset.data = yValues;//atualizar valores do eixo y
  });
  myChart.update();//atualizar gráfico
}