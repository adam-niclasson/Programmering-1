const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let guess = Math.round(Math.random() * 10 + 1);
let tries = 5;

rl.on('line', (input) => {
    let ans = parseInt(input);

    tries--;
    if (tries == 0) {
        console.log('Out of tries mate!');
        process.exit();
    }

    if (ans > guess) {
        console.log('U succ, little lower mate!');
    }
    else if (ans < guess) {
        console.log('Nope, guess higher!');
    }
    else if (ans === guess) {
        console.log('EZ dubbs!');
        process.exit();
    }
})