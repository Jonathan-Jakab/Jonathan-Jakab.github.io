const btnBigger = document.querySelector('bigger');
const btnRadioFancy = document.querySelector('fancy');
const btnRadioBoringBetty = document.querySelector('boring');
const btnMoo = document.querySelector('moo');

function bigger() {
  alert("Hello, world!");
  document.getElementById("text").style.font-size = "4em";
}

function fancy() {
  document.getElementById("text").style.font-weight = "bold";
  document.getElementById("text").style.font-color = "#0000ff";
  document.getElementById("text").style.text-decoration = "underline";
  document.getElementById("boring").checked = "false";
}

function boring() {
  document.getElementById("text").style.font-size = "1em";
  document.getElementById("text").style.font-color = "#000000";
  document.getElementById("text").style.font-family = "Arial";
  document.getElementById("fancy").checked = "false";
}

function moo() {
  document.getElementById("text").style.text-transformation = "uppercase";
}

btnBigger.onclick = bigger;
btnRadioFancy.onclick = fancy;
btnRadioBoringBetty.onclick = boring;
btnMoo.onclick = moo;

// btnBigger.onclick('click', bigger);
// btnRadioFancy.addEventListener('click', fancy);
// btnRadioBoringBetty.addEventListener('click', boring);
// btnMoo.addEventListener('click', moo);

