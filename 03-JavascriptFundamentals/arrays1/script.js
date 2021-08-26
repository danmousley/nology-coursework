const names = ["Andy", "Sam", "Bex"];
// console.log(coaches[1]);

const pets = ["Fluffy", "Rusty", "Dasher"];

// // // for (let i=0; i < pets.length; i++) {
// // //     console.log(pets[i]);
// // // }

// // pets.forEach((pet) => {
// //     console.log(pet);
// // })

// const newCoaches = coaches.map((coach) => {
//     return "coach" + coach;
// })

// console.log(newCoaches);

const coaches = names.filter((name) => {
    if (name.length > 3) {
        return true;
    } else {
        return false;
    }
})

// const animals = pets.filter((pet) => {
//     if (pet.includes("s")) {
//         return true;
//     } else {
//         return false;
//     }
// })

// console.log(animals)

const scores = [2, 9, 12];

const highScores = scores.filter((score) => score > 10);
    // if (score > 10) {
    //     return true;
    // } else {
    //     return false;
    // }


console.log(highScores);
