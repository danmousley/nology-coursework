// const fruitObjectArray = [
//     { fruit: "apple" , rating: 8, price: 150},
//     { fruit: "banana", rating: 5, price: 100 },
//     { fruit: "orange", rating: 6, price: 120 }
// ];

// console.log(fruitObjectArray[2])

// console.log(fruitObjectArray[1].fruit)

// const fruitValueArray = fruitObjectArray.map((fruitObject) => {
//     const fruitValue = fruitObject.fruit
//     return fruitValue
// })

// const searchTerm = "apple";

// const filteredArray = fruitObjectArray.filter((fruitObject) => {
//     const fruitMatch = fruitObject.fruit.includes(searchTerm)
//     return fruitMatch
// })

// console.log(filteredArray)

// let myFunction = (myArray) => {
//     const html = myArray.map((object) => {
//         return `<li>${object.fruit}</li>`
//     })

//     return html.join("")
// }

// console.log(myFunction(fruitObjectArray))

const fruitObjectArray = [
    { fruit: "apple" , rating: 8, price: 150},
    { fruit: "banana", rating: 5, price: 100 },
    { fruit: "orange", rating: 6, price: 120 }
];

console.log(fruitObjectArray[2].rating)

let myFunction = (myArray) => {
    myArray.sort((a, b) => {
        return b.rating - a.rating
    })
    const html = myArray.map((object) => {
        let upperFruit = object.fruit.charAt(0).toUpperCase() + object.fruit.slice(1)
        const cardHtml = `
        <div>
            <h3>${upperFruit}</h3>
            <p>This fruit is ${object.rating} / 10 </p>
            <p>Buy now for £${((object.price)/100).toFixed(2)} </p>
        </div>
        `
        return cardHtml;
    })

    return html.join("");
};

const sortedByHighestRating = fruitObjectArray.sort((a, b) => {
    return b.rating - a.rating
})

console.log(myFunction(fruitObjectArray))