var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

console.log(txtInput.value)

function clickHandler(){
    outputDiv.innerText = "Your are awesome " + txtInput.value;

}

btnTranslate.addEventListener("click", clickHandler);

