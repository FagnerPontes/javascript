/* 
Este script foi copiado do link:
https://www.w3schools.com/js/js_cookies.asp
!!!Atenção!!!
 Para o navegador armazenar o Cookie ele deve estar em um servidor!
 Utilize o Live Server no vsCode para textar o código!!!
*/

//Metódo responsável por criar o Cookie:
function setCookie(cname, cvalue, exdays) {
 const d = new Date();
 d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
 let expires = "expires=" + d.toUTCString();
 document.cookie = cname + "=" + cvalue + ";" + expires;
}

//Metódo responsável por retornar o Cookie:
function getCookie(cname) {
 let name = cname + "=";
 let ca = document.cookie.split(';');
 for (let i = 0; i < ca.length; i++) {
  let c = ca[i];
  while (c.charAt(0) == ' ') {
   c = c.substring(1);
  }
  if (c.indexOf(name) == 0) {
   return c.substring(name.length, c.length);
  }
 }
 return "";
}
