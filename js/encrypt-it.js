console.log("Window loaded!");

(function() {
  "use strict";
  window.addEventListener("load", init);


  function init() {
    let encryptItButton = document.getElementById("encrypt-it");
    encryptItButton.addEventListener("click", handleEncryptClick);
    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleResetClick)  

    let radioBtn12 = document.getElementById("radio-font12");
    radioBtn12.addEventListener("click", fontSize12);
    let radioBtn24 = document.getElementById("radio-font24");
    radioBtn24.addEventListener("click", fontSize24);

    let checkBtnCaps = document.getElementById("all-caps");
    checkBtnCaps.addEventListener("click", allCaps) 
  }

  function handleEncryptClick() {
    console.log("Encrypt Button Clicked");
    let textField = document.getElementById("input-text");
    let results = shiftCipher(textField);
    document.getElementById("result").textContent = results;
  }

  function handleResetClick() {
    console.log("Reset Button Clicked");
    let textField = document.getElementById("input-text");
    textField.value = "";
  }

  function shiftCipher(text) {
    text = text.value.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

  function fontSize12() {
    let textField = document.getElementById("input-text");
    if(document.getElementById("radio-font12").checked) {
      textField.style.fontSize = "12pt";
    }
  }

  function fontSize24() {
    let textField = document.getElementById("input-text");
    if(document.getElementById("radio-font24").checked) {
      textField.style.fontSize = "24pt";
    }
  }

  function allCaps() {
    let text = document.getElementById("input-text");
    if(document.getElementById("all-caps").checked) {
      text.style.textTransform = "uppercase";
    }
    if(!document.getElementById("all-caps").checked) {
      text.style.textTransform = "lowercase";
    }
  }

})();