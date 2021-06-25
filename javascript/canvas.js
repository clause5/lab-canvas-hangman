class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    console.log('creating board')
    this.context.clearRect(0,0,1200, 800);
    this.drawLines();
  }

  drawLines() {
    let start = 250;
    for(let i =0; i<this.secretWord.length ; i++){
      this.context.beginPath();
      this.context.moveTo(start,700);
        this.context.lineTo(start +30, 700);
        this.context.stroke();
        start +=50;
        this.context.closePath();
    }
  }

  writeCorrectLetter(letter) {
    for(let i =0 ; i < this.secretWord.length ; i++){
          if(letter === this.secretWord.charAt(i)){
            this.context.fillStyle ='green';
            this.context.font = '42px Kirang Haerang, cursive';
          this.context.fillText(`${letter}`, 255 + (50 * i) , 695 , 20);
          }
    }
    
  }

  writeWrongLetter(letter, errorsLeft) {
    if(errorsLeft  >= 0 ){this.context.clearRect(450,0,hangman.width, 300);
    this.context.fillStyle ='crimson';
    this.context.font = '42px Staatliches, cursive';
    this.context.fillText(`Wrong Letters:`, 750, 150);

    
    this.context.font = '40px Kirang Haerang, cursive';
      console.log(errorsLeft)
      this.context.fillText(`${letter}`, 600 + (50 * (10 - errorsLeft)), 200,20);
      this.context.stroke();
      this.drawHangman(10 - errorsLeft);}
  }

  drawHangman(errorsLeft) {
    switch(errorsLeft){
      case 1:
        this.context.beginPath();
        this.context.moveTo(0,700);
        this.context.lineTo(200,700);
        this.context.lineTo(100,650);
        this.context.lineTo(0,700);
        this.context.stroke();
        this.context.closePath();
        break;

      case 2:
        this.context.beginPath();
        this.context.moveTo(100,650);
        this.context.lineTo(100,250);
        this.context.stroke();
        this.context.closePath();
        break;

      case 3:
        this.context.beginPath();
        this.context.moveTo(100,250);
        this.context.lineTo(300,250);
        this.context.stroke();
        this.context.closePath();

        break;

      case 4:
        this.context.beginPath();
        this.context.moveTo(300,250);
        this.context.lineTo(300,300);
        this.context.stroke();
        this.context.closePath();
        break;

      case 5:
        this.context.beginPath();
        this.context.arc(300,330,30,0, Math.PI * 2);
        this.context.strokeStyle= 'black';
        this.context.stroke();
        this.context.closePath();
        break;
      case 6:
        this.context.beginPath();
        this.context.moveTo(300,360);
        this.context.lineTo(300,480);
        this.context.stroke();
        this.context.closePath();
        break;
      case 7:
        this.context.beginPath();
        this.context.moveTo(300,380);
        this.context.lineTo(250,450);
        this.context.stroke();
        this.context.closePath();
        break;
      case 8:
        this.context.beginPath();
        this.context.moveTo(300,380);
        this.context.lineTo(350,450);
        this.context.stroke();
        this.context.closePath();
        break;
      case 9:
        this.context.beginPath();
        this.context.moveTo(300,480);
        this.context.lineTo(250,550);
        this.context.stroke();
        this.context.closePath();
        break;
      case 10:
        this.context.beginPath();
        this.context.moveTo(300,480);
        this.context.lineTo(350,550);
        this.context.stroke();
        this.context.closePath();
        this.gameOver();
        break;
    }
  }

  gameOver() {
    this.context.drawImage(gameOverImg,550,250,500, 350);
    this.context.font = '42px Staatliches, cursive';
    this.context.fillText(`Secret Word: ${hangman.secretWord}`, 650, 650);
  }

  winner() {
    this.context.drawImage(awesomeImg,350,250,600, 400);
  }
}