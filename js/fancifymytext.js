// const btnBigger = document.querySelector('bigger');
// const btnRadioFancy = document.querySelector('fancy');
// const btnRadioBoringBetty = document.querySelector('boring');
// const btnMoo = document.querySelector('moo');

function bigger() {
  alert("Hello, world!");
  document.getElementById("text").style.font-size = "4em";
}

function fancy() {
  document.getElementById("text").style.fontWeight = "bold";
  document.getElementById("text").style.fontColor = "#0000ff";
  document.getElementById("text").style.textDecoration = "underline";
  document.getElementById("boring").checked = "false";
}

function boring() {
  document.getElementById("text").style.fontSize = "1em";
  document.getElementById("text").style.fontColor = "#000000";
  document.getElementById("text").style.fontFamily = "Arial";
  document.getElementById("fancy").checked = "false";
}

function moo() {
  document.getElementById("text").style.textTransformation = "uppercase";
}

// btnBigger.onclick = bigger;
// btnRadioFancy.onclick = fancy;
// btnRadioBoringBetty.onclick = boring;
// btnMoo.onclick = moo;

// btnBigger.onclick('click', bigger);
// btnRadioFancy.addEventListener('click', fancy);
// btnRadioBoringBetty.addEventListener('click', boring);
// btnMoo.addEventListener('click', moo);

