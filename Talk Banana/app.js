var btnTranslate = document.querySelector("#btn-translate"); //button
var txtInput = document.querySelector("#txt-input"); //inputfield
var outputDiv = document.querySelector("#output"); //output

// var serverULR = "https://lessonfourapi--tanaypratap.repl.co/translate/yoda.json"
var serverULR = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverULR + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Error occured !" + error)
    alert("Somethig wrong! Try again after sometime.")
}

function clickHandler() {
    // outputDiv.innerText = "Your are awesome " + txtInput.value;
    var inputText = txtInput.value //taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })

        //error handling
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);

// https://lessonfourapi--tanaypratap.repl.co/translate/yoda.json   -> mock server link