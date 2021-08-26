const user = {
    id: "kdnkf",
    loggedIn: true,
    information: {
        firstName: "Dan",
        lastName: "Mousley",
        age: 26
    },
    contact: {
        email: "dan@hotmail.com",
        contactNumber: "0121 37462",
        address: {
            houseNo: 12,
            roadName: "Electric Avenue",
            postcode: "LS6 5ED",
            country: "UK"
        }
    },
    likes: ["cycling", "disco", "coding"]
}

const userTwo = {
    id: "kdnkf",
    loggedIn: true,
    information: {
        firstName: "Dan",
        lastName: "Mousley",
        age: 26
    },
    contact: {
        email: "dan@hotmail.com",
        contactNumber: "0121 37462",
        address: {
            houseNo: 12,
            roadName: "Electric Avenue",
            postcode: "LS6 5ED",
            country: "UK"
        }
    },
    likes: ["cycling", "disco", "coding"]
}

// console.log(user.contact.contactNumber)
// console.log(user.information.age)
// console.log(user.contact.address.country)
// console.log(user.likes)

const userArray = [user, userTwo];

userArray.forEach(user => {
    console.log(user.id);
})

