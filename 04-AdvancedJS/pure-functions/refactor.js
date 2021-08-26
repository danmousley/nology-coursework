const makeFullNameUpper = (firstName, lastName) => `${firstName.toUpperCase()} ${lastName.toUpperCase()}`

const getMillisecondsSinceBirthday = (birthday) => Date().getTime() - Date(birthday).getTime();

const convertMillisecondsToDays = (milliseconds) => {Math.round(milliseconds/(1000 * 60 * 60 * 24))};

const findHeadlinesIncTech = (headline) => {
    filteredArr = headline.filter((item) => item.toUpperCase().includes("TECH"))
    return filteredArr;
}

console.log(makeFullNameUpper("matt", "Bickell"))
console.table(findHeadlinesIncTech([
    "Tech is booming",
    "Covid 19 yada yada yada",
    "Economy due for a resurgance!",
    "You can retrain in tech too!"
  ]))