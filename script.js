//Vamos a crear la logica del juego

//Declaracion de variables

//Generamos el numero aleatorio

let randomNumber=Math.floor(Math.random()*100)+1; //Otra forma random_number

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector (".lastResult");
const lowOrHi = document.querySelector (".lowOrHi");

//Guardamos la referencia a los elementos input con las
//clases especificadas 
const guessSubmit =  document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

//Guardamos el numero de intentos y una variable para generar 
//un boton de reset
let guessCount = 1;
let resetButton //Para crear una referencia a un boton

function checkGuess(){
    /*if (condicion){
    cuando condicion es True
    Ejecuto este bloque de codigo
    }else {
    cuenado condicion es flse
ejecuto este bloque de codigo
}
*/
   let userGuess = Number(guessField.value);
   if (userGuess===randomNumber) {
    //Si es igual, mostramos mensaje de felicitations
    lastResult.textContent = "Felicidades! Lo has logrado!";
    lastResult.style.backgroundColor="green";
    lowOrHi.textContent="";
    setGameOver();

   }
    else if (guessCount === 10) {
    //fallamos y no quedan intentos 
    lastResult.textContent = "Game over";
    setGameOver();
   } else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        //Comprobamos si el numero introducido es mayor o menor al aleatorio
        //Es la ayuda al jugador para adivinar el numero
        if (userGuess < randomNumber){
            lowOrHi.textContent = "too low";
        }else if (userGuess > randomNumber) {
            lowOrHi.textContent = "too high";
        }
   }

   guessCount++;
   guessField.value = "";
   guessField.focus();


} 

guessSubmit.addEventListener("click", checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Iniciar nuevo juego";
    resetButton.style.padding= "10px";
    resetButton.style.color= "lightgreen";
    document.body.append(resetButton);
    resetButton.style.border = "1px solid green";
    resetButton.style.borderRadius="5px";
    resetButton.style.backgroundColor="black"; 
    resetButton.addEventListener("click", resetGame);

}

function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for (let i=0; i< resetParas.length; i++){
        resetParas[i].textContent = "";
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "black";

    randomNumber= Math.floor(Math.random()*100)+1;

}



    