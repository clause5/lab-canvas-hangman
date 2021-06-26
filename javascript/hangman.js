class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord(this.words);
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft= 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * (this.words.length))];
  }

  checkIfLetter(keyCode) {
    return (keyCode > 64 && keyCode < 91);
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter)
  }

  addCorrectLetter(letter) {
        for(let i =0 ; i < this.secretWord.length; i++){
            if(this.secretWord.charAt(i) === letter){
              this.guessedLetters += letter;
            }
        }
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    if(this.checkClickedLetters(letter)){
      this.letters.push(letter);
    }
    
  }

  checkGameOver() {
    return this.errorsLeft > 0 ? false : true; 
  }

  checkWinner() {
    return (this.guessedLetters.length === this.secretWord.length);
  }
}

let hangman;

const gameOverImg = new Image();
  gameOverImg.src = '../images/gameover.png';
const awesomeImg = new Image();
awesomeImg.src = '../images/awesome.png';

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();

  });
}

document.addEventListener('keydown', event => {
    
    let pressedKey = event.key;
    if(!hangman.guessedLetters.includes(pressedKey) && !hangman.letters.includes(pressedKey))
    {

      
      if(hangman.secretWord.includes(pressedKey)){
        hangman.addCorrectLetter(pressedKey);
        hangmanCanvas.writeCorrectLetter(pressedKey);
        
        if(hangman.checkWinner()){
          hangmanCanvas.winner();
        }
        
      }else{
        hangman.addWrongLetter(pressedKey);
        hangmanCanvas.writeWrongLetter(pressedKey, hangman.errorsLeft);
        if(hangman.checkGameOver()){
          hangmanCanvas.gameOver();
        }
        
      }
      
    }
    
});