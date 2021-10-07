// GAME Function
// - PLAYER MUST GUESS A NUMBER BETWEEN A MIN AND MAX
// - PLAYER GETS A CERAIN AMOUNT OF GUESSES
// - NOTIFY PLAYER OF GUESSES REMAINING
// - NOTIFY THE PLAYER OF THE CORRECT ANSWER IF LOSE
// - LET PLAYER CHOOSE TO PLAY AGAIN



// game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
    
// assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener

game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})


// listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // if(guessInput.value === '') {
    //     alert('please enter a number');
    // }

    //validate
    if(isNaN(guess) || guess < min || guess > max ) {
        setMessage(`Please enter a number between ${min} and ${max}.`,'red')
    }

    //check if win
    if(guess === winningNum) {

        //
        // GAME WON
        //

        gameOver(true, `${winningNum} is correct, CONGRATULATIONS !!!`, 'green')

    } else {
        //WRONG number

        guessesLeft -=1;

        if(guessesLeft === 0) {

            gameOver(false, `GAME OVER. The correct number was ${winningNum}`, 'green')

        } else {
            //game continues = answer wrong

              //changing color to green
              guessInput.style.borderColor = 'red';

            //clear input
            guessInput.value = '';

              //tell user is the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red')
        }
    }

});


//
// GAME LOST
//
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    //disable input
    guessInput.disabled = true;

    //changing color to green
    guessInput.style.borderColor = color;

    //set text color
    message.style.color = color;

    //set message
    setMessage(msg);

    //play again
    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again';

}


//get winning number
function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}



//set message function
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
