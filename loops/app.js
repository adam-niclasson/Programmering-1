let index = 0

let names = ["Niklas", "Oliver", "Emil", "Melker", "Alex"]

// for (let i = names.length - 1; i >= 0; i--) {
//     console.log(names[i])
// }

let foundNiklas = false

while (!foundNiklas) {
    if (names[index] === "Niklas") {
        foundNiklas = true
    }
    else {
        index++
    }
}

console.log("I found Niklas at index " + index)