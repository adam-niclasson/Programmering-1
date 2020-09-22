var readlineSync = require('readline-sync');

var a = readlineSync.question('N? ')

for (let i = 1; i <= 100; i++) {
    if (i % 1 == 0) {
        console.log(i * a + " Abracadabra")
    }
}