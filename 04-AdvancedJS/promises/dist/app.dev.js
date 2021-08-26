"use strict";

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
var makeBeerCard = function makeBeerCard(beer) {
  var name = beer.name;
  var tagline = beer.tagline;
  var description = beer.description;
  var abv = beer.abv;
  var foodPairing = beer.food_pairing[0];
  return "\n    <header class=\"beer-title\">\n        <h1>".concat(name, "</h1>\n        <h3>(").concat(abv, "%)</h4>\n    </header>\n    <h4>").concat(tagline, "</h4>\n    <p>").concat(description, "</p>\n    <p><b>Goes well with: </b>").concat(foodPairing, "</p>\n    ");
};

document.addEventListener('DOMContentLoaded', function () {
  var getBeer = function getBeer() {
    fetch('https://api.punkapi.com/v2/beers/random').then(function (res) {
      return res.json();
    }).then(function (json) {
      var card = document.querySelector('#beerCard');
      card.innerHTML = makeBeerCard(json[0]);
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  getBeer();
});