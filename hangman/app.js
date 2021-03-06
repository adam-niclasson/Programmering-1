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

function rules() {
    console.log("Välkommen till hänga gubbe!")
    console.log("Du kommer att få gissa på ett slumpat ord,")
    console.log("men du har bara 7 försök på dig innan gubben blir hängd.")
    console.log("Orden som du kommer att giisa på är i små bokstäver,")
    console.log("och du får bara gissa med EN liten bokstav i taget.")
    console.log("Lycka till!!!")
}

//array of listed words the player can guess
const words = ['sverige', 'musik', 'bilder', 'discord', 'cyckel', 'skola']

//randomized word lets the player guess one letter at a time
var guessingword = words[Math.floor(Math.random() * words.length)]

let tries = 7; //antalet gissningar som spelaren har

//the placeholder of the randomized word.
// let selected = []
var guessingword = chosenWord()
const selected = setupSelected(guessingword)
var leftOver = guessingword.length;

function chosenWord() {
    //function that chooses a random word
}
function setupSelected(guessingword) {
    //return the selected word
}
function playerProg(selected) {
    //shows the progress of the player with alerts
}



for (var i = 1; i < guessingword.length; i++) {
    selected[i] = "_";
}

    //Hänga gubbe loop
while (leftOver > 0) {
    var guessLetter = prompt("Gissa en bokstav eller avsluta");
    if (guessLetter === 0) {
        break
    } else if (guessLetter.length !== 1) {
        alert("Guess ONE letter at a time!")
    } else {
        for (var a = 0; a < guessingword.length; a++) {
            if (guessingword[a] === guessLetter) {
                selected[a] = guessLetter; leftOver--;
            }
        }
    }
}

//visar att spelaren gissat rätt och säger grattis
alert(selected.join(" "));
alert("Snyggt gjort! svaret var " + guessingword)


rules() //ger spelaren reglerna för hänga gubbe