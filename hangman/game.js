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

//ger spelaren regler om hur man spelar hänga gubbe
function rules() {
    console.log("Välkommen till hänga gubbe!")
    console.log("Du kommer att få gissa på ett slumpat ord,")
    console.log("men du har bara 7 försök på dig innan gubben blir hängd.")
    console.log("Orden som du kommer att giisa på är i små bokstäver,")
    console.log("och du får bara gissa med EN liten bokstav i taget.")
    console.log("Lycka till!!!")
}

//array of listed words the player can guess
var words = ['sverige', 'musik', 'bilder', 'discord', 'cyckel', 'skola']

var randomChosenWord = words.toString(' ');

//game progress
const progress = []

//variabel som säger rätt och fel
var wrong = true

//funktionen som startar spelet
function gameStart() {
    rules()
    tries = 7
    chosenWord()
}

function chosenWord() {
    progress.slice(0, progress.length)
    randomChosenWord = ( words[Math.floor(words.length * Math.random())] )
    for (let a = 0; a < randomChosenWord.length; a++) {
        progress.push ("_");
    }
}

// denna funktionen jämnför gissni
function sortGuess(guess) {
    for (let a = 0; a < randomChosenWord.length; a++) {
        if (guess === randomChosenWord[a]) {
            wrong = false;
            progress[a] = randomChosenWord[a]
        }
        
    }
    if (wrong) {
        tries--;
        console.log('that guess is incorrect ' + tries + " left ");
    } else {
        console.log('det var rätt');
        console.log(progress.join(""));
    }
    if (progress.join("") === randomChosenWord) {
        console.log('du vann, spelet avslutas nu');
        process.exit()
    }
    if (tries == 0) {
        console.log('HAHA du är sämst, ordet var ' + randomChosenWord);
        process.exit()
    }
    wrong = true
}

gameStart()

rl.on('line', (guess) => {
    sortGuess(guess)
})