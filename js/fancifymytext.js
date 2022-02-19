// const btnBigger = document.querySelector('bigger');
// const btnRadioFancy = document.querySelector('fancy');
// const btnRadioBoringBetty = document.querySelector('boring');
// const btnMoo = document.querySelector('moo');

function bigger() {
  alert("Hello, world!");
  document.getElementById("text").style.fontSize = "4em";
}

function fancy() {
  document.getElementById("text").style.fontWeight = "bold";
  document.getElementById("text").style.color = "#0000ff";
  document.getElementById("text").style.textDecoration = "underline";
  document.getElementById("text").style.fontFamily = "Garamond";
  document.getElementById("boring").checked = "false";
}

function boring() {
  document.getElementById("text").style.fontSize = "1em";
  document.getElementById("text").style.color = "#000000";
  document.getElementById("text").style.fontStyle = "Arial";
  document.getElementById("fancy").checked = "false";
}

function moo() {
  document.getElementById("text").style.textTransform = "capitalize";
  document.getElementById("text").style.fontFamily = "Garamond";
}

// btnBigger.onclick = bigger;
// btnRadioFancy.onclick = fancy;
// btnRadioBoringBetty.onclick = boring;
// btnMoo.onclick = moo;

// btnBigger.onclick('click', bigger);
// btnRadioFancy.addEventListener('click', fancy);
// btnRadioBoringBetty.addEventListener('click', boring);
// btnMoo.addEventListener('click', moo);

