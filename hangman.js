$(document).ready(function(){
   $("button").click(getLetter);
    $("#win").hide();
    $("#lose").hide();

   var catBreeds = [
        "bombay",
        "sphynx",
        "savannah",
        "bengal",
        "siberian",
        "abyssinian",
        "nebelung",
        "singapura",
        "persian",
        "tonkinese",
        "birman",
        "siamese",
        "ragamuffin",
        "ragdoll",
        "balinese"
    ]

    var gamePlay = {
       answer: randomWord(),
       mistakes: 0,
       guessed: [],
       wordStatus: null
    };

   displayAnswer();
   displayGameStatus();

   function randomWord() {
        return catBreeds[Math.floor(Math.random() * catBreeds.length)];
    }

   function displayGameStatus()
   {
       $("td#wrongGuesses").text('You guessed ' + gamePlay.mistakes + ' wrong letters')
   }

   function getLetter()
   {
       var chosenLetter = this.id;
       gamePlay.guessed.push(chosenLetter);
       displayAnswer();
       if (!gamePlay.answer.includes(chosenLetter)) {
           gamePlay.mistakes++;
       }
       determineGameOver();
       displayGameStatus();
       $("#" + chosenLetter).hide();
   }

   function displayAnswer()
   {
       var display = ""
       for (var i = 0; i < gamePlay.answer.length; i++) {
           if (gamePlay.guessed.includes(gamePlay.answer.charAt(i))) {
               display = display + gamePlay.answer.charAt(i);
           }
           else {
               display = display + " _ "
           }
       }
       $("#answer").text(display)
       gamePlay.wordStatus = display;
   }

   function determineGameOver()
   {
        if (gamePlay.mistakes >= 6) {
            //display "you lose"
            $("#gameBoard").hide();
            $("#lose").show();
            $("#showAnswer").text('The answer was ' + gamePlay.answer)
        }
        if (gamePlay.wordStatus === gamePlay.answer) {
            //display "you win"
            $("#gameBoard").hide();
            $("#win").show();
        }
   }

});