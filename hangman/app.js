// 1. Ge spelaren instruktioner om hur man spelar spelet.
// 2. Generera ett slumpat ord som spelaren ska gissa på.
//    2.1 Använd ett eget ord som du själv lägger in.
// 3. Skapa X antal "_" som matcher antalet bokstäver i ordet och be spelaren att gissa EN boksgtaav i taget.
//    3.1 Meddela att spelaren gissat rätt eller fel.
// 4. Spara spelarens gissnignar.
// 5. Grattis du är klar.

//Let the guessing game begin

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function rules() {
    console.log("Välkommen till hänga gubbe!")
    console.log("Du kommer att få gissa på ett slumpat ord,")
    console.log("men du har bara 7 försök på dig innan gubben blir hängd.")
    console.log("")
}

const words = ['sverige', 'musik', 'bilder', 'båtar', 'cyckel', 'skola']

const random = Math.floor(Math.random() * words.length);
console.log(random, words[random]);
let tries = 7; //antalet gissningar som spelaren har

rules() //ger spelaren reglerna för hänga gubbe
rl.on('line', (input) => {
    let ans = parseInt(input);

    tries--;
    if (tries == 0) {
        console.log('You lost and the game has ended.')
        process.exit();
    }


})