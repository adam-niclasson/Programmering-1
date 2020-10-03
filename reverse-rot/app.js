const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const alf = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,R,S,T,U,V,W,X,Y,Z,_,."

rl.question("Enter text here: ", (answer) => {
    let string = answer.split('').reverse()
    console.log(string)

    rl.question("How many rotations? ", (answer) => {

    })
})