const buttonMenuLeft = document.getElementById('buttonMenuLeft');
const buttonMenuRight = document.getElementById('buttonMenuRight');
const myDivLeft = document.getElementById('myDivLeft');
const myDivRight = document.getElementById('myDivRight');

var windowWidth = window.innerWidth; 
if (windowWidth >= 800) {
  myDivLeft.classList.add('open');
  myDivRight.classList.add('open');
  document.documentElement.style.setProperty('--menuWidth', '16rem');
}
else {
  myDivLeft.classList.add('close');
  myDivRight.classList.add('close');
  document.documentElement.style.setProperty('--menuWidth', '100%');
}

addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  if (windowWidth < 800) {
    myDivLeft.classList.replace('open', 'close');
    myDivRight.classList.replace('open', 'close');
    document.documentElement.style.setProperty('--menuWidth', '100%');
  }
  else {
    myDivLeft.classList.replace('close', 'open');
    myDivRight.classList.replace('close', 'open');
    document.documentElement.style.setProperty('--menuWidth', '16rem');
  }
});

function AnimationEnd(myDivMenu, myButton) {
  (myDivMenu.classList.contains('closeDivMenu'))?
    myDivMenu.classList.remove('closeDivMenu'):
    myDivMenu.classList.remove('openDivMenu');
  (myDivMenu.classList.contains('open'))?
    myDivMenu.classList.replace('open', 'close'):
    myDivMenu.classList.replace('close', 'open');
  myButton.disabled = false;
}

function SliceMenu(myDivMenu1, myDivMenu2) {
  (myDivMenu1.classList.contains('open'))?
    myDivMenu1.classList.add('closeDivMenu'):
    myDivMenu1.classList.add('openDivMenu');
  if (windowWidth < 800) {
    if (myDivMenu2.classList.contains('open'))
      myDivMenu2.classList.add('closeDivMenu');
  }
}

myDivLeft.addEventListener('animationstart', () => {
  buttonMenuLeft.disabled = true;
});
myDivLeft.addEventListener('animationend', () => {
  AnimationEnd(myDivLeft, buttonMenuLeft);
});

myDivRight.addEventListener('animationstart', () => {
  buttonMenuRight.disabled = true;
});
myDivRight.addEventListener('animationend', () => {
  AnimationEnd(myDivRight, buttonMenuRight);
});

buttonMenuLeft.addEventListener('click', () => {
  SliceMenu(myDivLeft, myDivRight);
});

buttonMenuRight.addEventListener('click', () => {
  SliceMenu(myDivRight, myDivLeft);
}); 