// for (let i = 0; i <= 100; i += 1) {
//     console.log(i)
// }

for (let a = 0; a <= 100; a++) {
    if (a % 2 == 0) {
        console.log(a + " hey")
    }
    else if (a % 3 == 0 && a % 5 == 0) {
        console.log("FizzBuzz")
    }
    else if (a % 3 == 0) {
        console.log("Fizz")
    }
    else if (a % 5 == 0) {
        console.log("Buzz")
    }
}