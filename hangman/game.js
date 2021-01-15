// 1. ge instruktioner till spelaren om hänga gubbe
// 2. skapa en array med ord som slumpas med hjälp av math.random
//    2.1 använd ett ord som du själv lägger in(valfritt)
// 3. skapa x antal _ som ersätter bokstäverna
//    3.1 om spelaren gissar rätt bokstav så ersätts _ med ex "a"
//    3.2 gissar spelaren fel så stannar _ som _
// 4. meddela spelaren om gissningen är rätt respektive fel
// 5. spelaren får bara gissa EN bokstav i taget
// 6. spara spelarens gissning så både programmet kommer ihåg vad spelaren gissat och även så spelaren kan se sina gissningar.
// 7. är hela ordet gissat innan dem 7 gissningarna är slut så avslutas spelet och spelaren vinner
//    7.1 om spelaren får slut på gissningar så avslutas spelet och spelaren har förlorat.
// 8. du är nu klar, börja programmera och problemsök
// 9. Let the game begin :)


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tries = 7; //antalet gissningar som spelaren har

const correctGuess = []
const faultyGuess = []

//ger spelaren regler om hur man spelar hänga gubbe
function rules() {
    console.log("Välkommen till hänga gubbe!")
    console.log("Du kommer att få gissa på ett slumpat ord,")
    console.log("men du har bara 7 försök på dig innan gubben blir hängd.")
    console.log("Orden som du kommer att giisa på är i små bokstäver,")
    console.log("och du får bara gissa med EN liten bokstav i taget.")
    console.log("Lycka till!!!")
}

//funktionen som startar spelet
function gameStart() {
    rules()
    tries = 7
    chosenWord()
}

//array of listed words the player can guess
const words = ['sverige', 'musik', 'bilder', 'discord', 'cyckel', 'skola']

const randomChosenWords = []

function chosenWord() {
    randomChosenWords = words[Math.floor(words.length * Math.random())]
}

//a function that checks if the guess is right or wrong to the chosen word
function guessCompare(guess, correctGuess, faultyGuess, randomChosenWords) {
    for (var i = 1; i < randomChosenWords.length; i++) {
        if (randomChosenWords[i] == guess) {
            correctGuess.push(guess)
        }
        else if(randomChosenWords[i] !== guess) {
            faultyGuess.push(guess)
        }
    }
}

//funktionen nedan gör det möjligt för spelaren att gissa en bokstav
function attemptedGuess(guess)

if (tries === 0)