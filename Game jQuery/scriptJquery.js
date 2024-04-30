// Editar arquivo scriptJquery.js

//classe do atirador
class shooter {
  constructor(parent, myWidth, myHeight, myColor, positionY, paused) {
    this.parent = parent; //elemento pai
    this.paused = paused; //boleano para pausar o game
    this.element = document.createElement('div');//elemento do objeto atirador
    $(this.element).css({
      'position': 'fixed',//css -> posição fixa
      'left': `50%`,//css -> posição inicial no eixo x
      'top': `${positionY}px`,//css -> posição no eixo y
      'width': `${myWidth}px`,//css -> largura do objeto
      'height': `${myHeight}px`,//css -> altura do obejto
      'background-color': myColor,//css -> cor de fundo do objeto
    });
    $(this.parent).append(this.element);//inserir elemento
    $(window).on('mousemove', (e) => {
      if (!this.paused)//se pausado for falso:
        $(this.element).css({ 'left': `${e.clientX - (myWidth / 2)}px` });//movimentar objeto com o mouse
    })
  }

  destroi() {//função para remover o projétil.
    $(this.element).css({ 'display': 'none' });//ocultar elemento
    $(this.element).remove()//remover elemento
  }
}

//classe dos porjéteis
class bullet {
  constructor(parent, myWidth, myHeight, myColor, positionX, positionY) {
    this.parent = parent;//elemento pai
    this.position = {
      x: positionX - (myWidth / 2),//posição no eixo x (transform: translate(-50%, 50%));
      y: positionY,//posição no eixo y
      c: positionX//posição do centro do objeto
    }
    this.element = document.createElement('div');//elemento do objeto bullet
    $(this.element).css({
      'position': 'fixed',//css -> posição fíxa	
      'left': `${this.position.x}px`,//css -> posição no eixo x
      'top': `${this.position.y}px`,//css -> posição no eixo y
      'width': `${myWidth}px`,//css -> largura do objeto bullet
      'height': `${myHeight}px`,//altura do objeto bullet
      'background-color': myColor,//css -> cor de fundo do objeto bullet
      'border-top-left-radius': '50%',//css -> arredondamento superior esquerdo
      'border-top-right-radius': '50%',//css -> arredondamento superior direito
    });
    $(this.parent).append(this.element);//inserir elemento
  }

  move() {//função para mover o projétil
    if (this.position.y > 0) {//se a posição no eixo y for maior que 0
      this.position.y -= 2;//suba a posição do eixo y em dois pixels
      $(this.element).css({ 'top': `${this.position.y}px` });//atualize a posição
    }
  }

  destroi() {//função para remover o projétil.
    this.position.y = -200;//posição fora da tela em 200 pixels
    $(this.element).css({ 'top': `${this.position.y}px` });//atualizar a posição
    $(this.element).css({ 'display': 'none' });//ocultar elemento
    $(this.element).remove();//remover elemento
  }
}

//classe dos inimigos
class enemy {
  constructor(parent, myWidth, myHeight, myColor, windowWidth, windowHeight) {
    this.parent = parent;//elemento pai
    this.position = {
      x: Math.floor(Math.random() * (windowWidth - 100) + 50),//posição no eixo x
      y: 0,//posição no eixo y
    }
    this.center = this.position.x + (myWidth / 2);//posição do centro do objeto
    this.windowHeight = windowHeight;//altura da janela
    this.element = document.createElement('div');//elemento do objeto enemy
    $(this.element).css({
      'position': 'fixed',//css -> posição fíxa	
      'left': `${this.position.x}px`,//css -> posição no eixo x
      'top': `${this.position.y}%`,//css -> posição no eixo y
      'width': `${myWidth}px`,//css -> largura do objeto enemy
      'height': `${myHeight}px`,//css -> altura do objeto enemy
      'background-color': myColor,//css -> cor de fundo do objeto enemy
      'border-radius': '50%',//css -> arredondamento do objeto enemy
    });
    $(this.parent).append(this.element);//inserir elemento
  }

  move() {//função para mover o inimigo
    if (this.position.y < this.windowHeight) {//se a posição for menor que o tamanho da janela
      this.position.y += 1;//desça a posição do eixo y em um pixels
      $(this.element).css({ 'top': `${this.position.y}px` });//atualize a posição
    }
  }

  destroi() {//função para remover o inimigo.
    this.position.y = this.windowHeight + 200;//posição fora da tela em 200 pixels
    $(this.element).css({ 'top': `${this.position.y}px` });//atualizar posição
    $(this.element).css({ 'display': 'none' });//ocultar elemento
    $(this.element).remove();//remover elemento
  }
}

/*variáveis e elementos html*/
const myWindowWidth = window.innerWidth;//largura da janela
const myWindowHeight = window.innerHeight;//altura da janela
var bullets = [];//array com objetos bullets
var enemys = [];//array com objetos enemys
var myShooter;//Variavel que receberá o objeto atirador
var myInterval;//variável que receberá a atualização
var mousePositionX;//variável que armazenará a posição do mouse
var time;//variável que será responsável pelo delay na criação de inimigos
var isPaused = false;
var startGame = false;

function Move() {//função para mover os inimigos e os projéteis
  enemys.forEach(enemy => {//percorrer todos os objetos no array enemys
    enemy.move();//chamar a função move do objeto enemy
    if (enemy.position.y >= myWindowHeight) {//se a posição for maior que a janela
      enemys = enemys.filter(item => item !== enemy);//remover objeto do array
      enemy.destroi();//chamar a função destroi do objeto enemy
      enemy = null;
    }
  });
  bullets.forEach(bullet => {//percorrer todos os objetos no array bullets
    bullet.move();//chamar a função move do objeto bullet
    if (bullet.position.y <= 0) {//se a posição for menor que 0
      bullets = bullets.filter(item => item !== bullet);//remover objeto do array
      bullet.destroi();//chamar a função destroi do objeto bullet
      bullet = null;
    }
  });
}

function Collision() {//função para verificar colisões entre os objetos
  enemys.forEach(enemy => {//percorrer todos os objetos no array enemys
    bullets.forEach(bullet => {//percorrer todos os objetos no array bullets
      if (Math.abs(enemy.center - bullet.position.c) <= 25) {//se a distância entre os centros (eixo x) for menor que 25px
        if (Math.abs(enemy.position.y - bullet.position.y) <= 25) {//se a distância entre as alturas (eixo y) for menor que 25px
          bullets = bullets.filter(item => item !== bullet);//remover objeto do array
          enemys = enemys.filter(item => item !== enemy);//remover objeto do array
          enemy.destroi()//chamar a função destroi do objeto enemy
          bullet.destroi()//chamar a função destroi do objeto bullet
        }
      }
    });
  });
}

//EventListenner (criar novo projétil)
var newBulletEvent = (e) => {
  mousePositionX = e.clientX;//posição do mouse no eixo x
  bullets.push(new bullet(document.body, 10, 20, '#ffff00', mousePositionX, myWindowHeight - 150));
};

//EventListenner (iniciar o jogo)
var startGameEvent = (event) => {
  if (event.key == 'Enter' && !startGame) {//se pressionar Enter
    startGame = true;
    console.log(startGame);
    $(document.body).text('');//conteúdo do elemento body
    myShooter = new shooter(document.body, 20, 20, '#0000ff', myWindowHeight - 150, isPaused);//objeto atirador
    $(window).on('click', newBulletEvent);//evento de criação de um novo projétil
    time = Date.now(); //tempo atual em milissegundos (delay para criar inimigos)
    updateFrame(myInterval);//função responável pela animação
    $(window).off('keydown', this);//remover evento startGameEvent
  }
}

//função responável pela animação (atualização da tela)
function updateFrame() {
  myInterval = setInterval(() => {
    if (!isPaused) {
      Move();//chamada do método responsável pelas movimentações
      Collision();//chamada do método responsável pelas colisões
      //delay para criar um novo inimigo:
      if ((Date.now() - time) > 1000) {//se o delay foi maior que 1 segundo
        enemys.push(new enemy(document.body, 50, 50, '#444', myWindowWidth, myWindowHeight));//criar novo inimigo
        time = Date.now();//tempo atual em milissegundos
      }
    }
  }, 5);
}

//evento para iniciar o game:
$(document).on('keydown', startGameEvent);

//evento para encerrar o game:
$(document).on('keydown', (event) => {
  if (event.key == 'Escape') {//se a tecla Esc for pressionada
    window.location.reload();//realize o refresh da página
  }
});

//evento para pausar o game:
$(document).on('keydown', (event) => {
  if (event.key == ' ') {//se a tecla Space for pressionada
    isPaused = !isPaused;//mude o valor da variável isPoused
    myShooter.paused = isPaused;//mude o valor do atributo paused do objeto myShooter
    (isPaused) ? //se isPaused for vedadeiro
      $(window).off('click', newBulletEvent) : //remova o evento newBulletEvent
      $(window).on('click', newBulletEvent); //senão, adicione o evento newBulletEvent
  }
});

$(document.body).css({
  'background-color': '#000',//css -> cor de fundo preto
  'color': '#fff',//css -> cor da fonte branca
});