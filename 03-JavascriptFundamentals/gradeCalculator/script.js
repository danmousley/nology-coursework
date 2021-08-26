function handleCalculateGrade(event) {
    const grade = event.target.value.toUpperCase();

    if (!grade) {
        return;
    }

    let percentage;
    switch (grade) {
        case "A":
            percentage = "90-100";
            break;
        case "B":
            percentage = "75-90";
            break;
        case "C":
            percentage = "50-75";
            break;
        case "D":
            percentage = "25-50";
            break;
        case "E":
            percentage = "0-25";
            break;
    }
    if (percentage) {
        alert("The percentage was " + percentage)
    } else {
        alert("Percentage undefined")
    }
    
}

function numberCheck(event) {
    number = event.target.value;

    if (number > 0) {
        alert("Number is positive")
    } else if (number < 0) {
        alert("Number is negative")
    } else {
        alert("Number is 0")
    }
}

// let num1 = 3
// let num2 = 5
// let num3 = 2

// if (num1 > num2 && num1 > num3) {
//     console.log("num1 is the greatest!")
// } else if (num2 > num1 && num2 > num3) {
//     console.log("num2 is the greatest!")
// } else {
//     console.log("num3 is the greatest!")
// }

// let day = ""

// switch(day) {
//     case "Monday":
//         console.log("5 days until the weekend :(")
//         break;
//     case "Tuesday":
//         console.log("4 days until the weekend :/")
//         break;
//     case "Wednesday":
//         console.log("3 days until the weekend ")
//         break;
//     case "Thursday":
//         console.log("2 days until the weekend :)")
//         break;
//     case "Friday":
//         console.log("1 days until the weekend :D")
//         break;
//     default:
//         console.log("It's the freakin' weekend!")
// }

// let vegetable = "carrot"

function vegetable(event) {
    let vegetable = event.target.value;

    switch(vegetable) {
    case "potato":
    case "carrot":
        alert("37p please!")
        break;
    case "broccoli":
        alert("42p please!")
        break;
    case "cabbage":
        alert("56p please!")
        break;
    case "asparagus":
        alert("12p please!")
        break;
    }
}
