const btnBigger = document.querySelector('bigger');
const btnRadioFancy = document.querySelector('fancy');
const btnRadioBoringBetty = document.querySelector('boring');
const btnMoo = document.querySelector('moo');

function bigger(number) {
  alert("Hello, world!");
  return Math.floor(Math.random() * (number+1));
  document.getElementById("text").style.font-size = "4em";
}

function fancy(number) {
  document.getElementById("text").style.font-weight = "bold";
  document.getElementById("text").style.font-color = "#0000ff";
  document.getElementById("text").style.text-decoration = "underline";
  document.getElementById("boring").checked = "false";
}

function boring(number) {
  document.getElementById("text").style.font-size = "1em";
  document.getElementById("text").style.font-color = "#000000";
  document.getElementById("text").style.font-family = "Arial";
  document.getElementById("fancy").checked = "false";
}

function moo(number) {
  document.getElementById("text").style.text-transformation = "uppercase";
}

btnBigger.addEventListener('click', bigger);
btnRadioFancy.addEventListener('click', fancy);
btnRadioBoringBetty.addEventListener('click', boring);
btnMoo.addEventListener('click', moo);

