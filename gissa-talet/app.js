let answer = Math.floor((Math.random() * 10) + 1)
let tries = 5;
let question = "Guess a number between 1 and 10";
let guess = '';

while (tries > 0) {
    guess = prompt(question, guess);

    if (guess == null) {
        alert('You lost. Better luck next time!');
        break;
    }
    else if (isFinite(guess) && guess != '') {
        guess = +guess;
    }
    else if (a) {
        a
    }
}