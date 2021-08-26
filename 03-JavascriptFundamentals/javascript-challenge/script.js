function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;

    let yearsRemaining = 65 - currentAge

    alert("You have " + yearsRemaining + " years remaining until retirement!")
}

function frenchGreeting(event) {
    const greeting = event.target.value;

    if (greeting == "Bonjour") {
        alert("Au revoir!")
    } else {
        alert("Greeting not recognised")
    }
}