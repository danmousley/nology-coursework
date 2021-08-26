// const perimeter = (width, height) => {
//     return (width * 2) + (height * 2)
// }

// console.log(perimeter(2,3))

// const circleArea = (radius) => {
//     return Math.PI * (radius ** 2);
// }

// console.log(circleArea(3))

// const circleCircumference = (radius) => {
//     return 2 * Math.PI * radius;
// }

// console.log(circleCircumference(3))

// const getDescription = (numChildren, partnerName, location, jobTitle) => {
//     console.log("I am currently a " + jobTitle + " living in " + location + ", and married to " + partnerName + " with " + numChildren + " kids.")
// }

// getDescription(5, "Julie", "Vietnam", "Banker");

// const calculateSupply = (age, amountOfChocolatePerDay) => {
//     const maxAge = 80;
//     let amountOfChocolate = (maxAge - age) * 365 * amountOfChocolatePerDay
//     console.log(`You will need ${amountOfChocolate} to last you until the ripe old age of ${maxAge}`)
// }

// calculateSupply(26, 3.1)

const tempConverter = (celcius) => {
    const farenheit = (celcius * 9/5) + 32
    console.log(`The temperature is ${farenheit} degrees farenheit.`)
}

tempConverter(37)