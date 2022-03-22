window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
  }
  function CLASS(elem){
      return document.getElementsByClassName(elem);
  }
  function $(elem){
      return document.querySelectorAll(elem);
  }

  var jatek = [];

  function init(){
    rublikak();
    kattint();
  }

  function rublikak(){
    var txt = "";
    for (let index = 1; index <= 9; index++) {
      txt += `<div class="rublika"></div>`;
    }
    ID("jatekter").innerHTML = txt;
  }

  function kattint(){
      
  }