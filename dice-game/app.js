const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = []

function yeet() {
    let s1 = Number(lines[0])
    let s2 = Number(lines[1])
    let s3 = Number(lines[2])
    let s4 = Number(lines[3])

    let d1 = (s1 + s2) / 2
    let d2 = (s3 + s4) / 2

    if (d1 > d2) {
        console.log("Emma scored " + d1 + " and won!");
    } else if (d1 < d2) {
        console.log("Gunnar scored " + d2 + " and won!")
    } else if (d1 == d2) {
        console.log("Tied!");
    }
}

rl.on('line', (input) => {
    lines.push(input)
    if (lines.length == 4) {
        yeet(); {
            rl.close()
        }
    }
});