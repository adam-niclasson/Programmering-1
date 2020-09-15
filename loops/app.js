let index = 0

let names = ["Niklas", "Oliver", "Emil", "Melker", "Alex"]

for (let i = names.length - 1; i >= 0; i--) {
    // console.log(names[i])
}

let foundNiklas = false

// while (!foundNiklas) {
//     if (names[index] === "Niklas") {
//         foundNiklas = true
//     }
//     else {
//         index++
//     }
// }

// console.log("I found Niklas at index " + index)

for (let i = 0; i <= 100; i += 2) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

for (let a = 5; a < 79; a++) {
    if (a % 3 == 0) {
        console.log(a)
    }
}

let teachers = ["Niklas", "Victor", "Parvin"]

for (let n = teachers.length - 1; n >= 0; n--) {
    console.log(teachers[n])
}