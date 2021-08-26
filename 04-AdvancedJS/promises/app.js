// // console.log("works")

// // a promise has 3 states: pending, resolved and rejected

// let samsPromise = new Promise((resolve, reject) => {
//     let a = 1 + 2;
//     if (a == 3) {
//         resolve("Success")
//     } else {
//         reject("Failed")
//     }
// })

// samsPromise
//     .then((message) => {
//         console.log(message + '. I am in the THEN')
//     })
//     .catch((message) => {
//         console.log(message + '. I am in the CATCH')
//     })

// https://randomuser.me/api/

// const getRandomUser = () => {
//     fetch('https://randomuser.me/api/')
//         .then(res => res.json())
//         .then(json => {
//             let firstName = json.results[0].name.first
//             document.querySelector('#firstName').innerHTML = firstName
//         })
//         .catch(err => console.log(err))
// };

// getRandomUser();

// https://api.punkapi.com/v2/beers/random

// make a request to the above api...from the response please display the following data in a 'card' (div)
// - name (h1)
// - tagline (h4)
// - description (p)
// - abv (h2/h3)
// - Food pairing: the first food that it pairs well with

const makeBeerCard = (beer) => {
    let name = beer.name
    let tagline = beer.tagline
    let description = beer.description
    let abv = beer.abv
    let foodPairing = beer.food_pairing[0]

    return `
    <header class="beer-title">
        <h1>${name}</h1>
        <h3>(${abv}%)</h4>
    </header>
    <h4>${tagline}</h4>
    <p>${description}</p>
    <p><b>Goes well with: </b>${foodPairing}</p>
    `
}

document.addEventListener('DOMContentLoaded', () => {
    const getBeer = () => {
        fetch('https://api.punkapi.com/v2/beers/random')
            .then((res) => res.json())
            .then((json) => {
                let card = document.querySelector('#beerCard')
                card.innerHTML = makeBeerCard(json[0])
            })
            .catch(err => console.log(err))
    }

    getBeer()
})


