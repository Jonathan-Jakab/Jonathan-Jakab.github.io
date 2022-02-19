function bigger(number) {
  alert("Hello, world!");
  return Math.floor(Math.random() * (number+1));
  document.getElementById("text").style.font-size = "4em";
}

function fancy(number) {
  document.getElementById("text").style.font-weight = "bold";
  document.getElementById("text").style.font-color = "#0000ff";
  document.getElementById("text").style.text-decoration = "underline";
}

function boring(number) {
  document.getElementById("text").style.font-size = "1em";
  document.getElementById("text").style.font-color = "#000000";
  document.getElementById("text").style.font-family = "Arial";
}

function moo(number) {
  document.getElementById("text").style.text-transformation = "uppercase";
}

