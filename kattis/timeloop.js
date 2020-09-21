var readlineSync = require('readline-sync');

var a = readlineSync.question('N? ')

for (let a = 1; a <= 100; a++) {
    if (a % 1 == 0) {
        console.log(a + " Abracadabra")
    }
}