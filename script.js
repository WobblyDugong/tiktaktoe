window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem);
}
function CLASS(elem) {
  return document.getElementsByClassName(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}

function init() {
  rublikak();
}

function rublikak() {
  var txt = "";
  for (let index = 1; index <= 9; index++) {
    txt += `<div class="rublika" id="${index}"><p></p></div>`;
  }
  ID("jatekter").innerHTML = txt;
  for (let index = 1; index <= 9; index++) {
      ID(index).addEventListener("click", valasztas)
      
  }
}

function valasztas(){
    console.log(event.target.id);
    var kattint = event.target.id;
    ID(kattint).innerHTML = "<p>x</p>"
}

