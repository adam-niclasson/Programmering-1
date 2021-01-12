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


// Vilken extra funktionalitet har du tänkt implementera?


// Vilka variabler behöver du och till vilket syfte? Här vill jag ha med variabelnamn, datatyp och en förklaring på vad variabeln är till för - på varje variabel.
// den första variabeln jag har i min kod är 'guessingword' vilket är variabeln som håller i det valda ordet som spelaren ska gissa på.
//den andra variabeln i min kod är 'leftOver' dock är detta inte bara en variabel utan en del av min while loop
//men dess användnings område är att hålla koll på vad spelaren gissar, gissat och kvarstående bokstäver. Även att spelaren gissar en bokstav och inte fler än en, 

// Vilka olika konstrollstrukturer behövs och till vilket syfte? (Loopar, villkor, etc.) Var så detaljerad som möjligt.
// Det kommer behövas iaf en while loop, och i den loppen så kommer sjävla hänga gubbe utspela sig, där du gissar en bokstav,
// får rätt eller fel, till du antingen gissat rätt ord, eller att gubben hängs och du förlorar spelet.

// Vilken funktionalitet kan (och borde) du skapa funktioner av? Här vill jag ha funktionsnamn, returtyp, eventuella parametrar samt vad funktionen ska göra.
//Jag ska ha en funktion som ger spelaren regler innan spelet börjat, en funktion som ger spelaren sin 'progress' i spelet,
//en som väljer ett randomiserat ord och en som håller i det valda ordet och kommer ihåg det.

// Vilka variabler behöver vara åtkomliga inom hela klassen?


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
const words = ['sverige', 'musik', 'bilder', 'båtar', 'cyckel', 'skola']

//randomized word lets the player guess one letter at a time
var guessingword = words[Math.floor(Math.random() * words.length)]

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

let tries = 7; //antalet gissningar som spelaren har

rules() //ger spelaren reglerna för hänga gubbe