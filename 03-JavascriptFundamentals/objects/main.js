// // // Object syntax

// // const exampleObject = {
// //     key: "value",
// //     types: "any",
// //     method() {
// //         return this.key + " " + this.types
// //     }
// // }

// // // access object properties
// // // dot notation
// // console.log(exampleObject.key)
// // console.log(exampleObject.types)

// // // calling a method
// // console.log(exampleObject.method())

// // // square brackets
// // console.log(exampleObject["types"])
// // console.log(exampleObject["key"])

// // // adding a key to an object
// // exampleObject.newKey = "new value"

// // console.log(exampleObject)

// const studentContainer = document.querySelector(".students-container")

// studentContainer.style.border = "2px solid red"

// const person = {
//     firstName: "Charlie",
//     lastName: "Richardson",
//     quote: "It doesn't get easier, you just get faster",
//     skills: ["html", "css", "jacascript"],
//     imgURL: "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
//     getFullName() {
//         return this.firstName + " " + this.lastName
//     },
//     listSkills() {
//         let skillList = ""
//         this.skills.forEach((skill) => {
//             skillList += `<li>${skill}</li>`
//         })
//         return `${skillList}`
//     },
//     getHTML() {
//         let html = `
//         <article class="student-card">
//             <img src=${this.imgURL} />
//             <h2>${this.getFullName()}</h2>
//             <blockquote>${this.quote}</blockquote>
//             <h3>Skills</h3>
//             <ul>
//                 ${this.listSkills()}
//             </ul>
//         </article>
//         `
//         return html
//     }
// }

// studentContainer.innerHTML = person.getHTML()

// // add a method onto person object that returns the same HTML
// // use 'this' keyword


// console.log(person.listSkills())

// // write a method on person object that uses the skills array
// // iterate over skills array and generate a list item for each skill
// // e.g. <li>html</li>
// // returns a string -> array into a string

// person.age = 30
// // console.log(person);
// // console.log(person.firstName)
// // console.log(person.getFullName())

// // class syntax

// class ExampleClass {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.age = age
//     }

//     greet() {
//         return `Hi, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`
//     }
// }

// const exampleOne = new ExampleClass("Dan", "Mousley", 26)
// const exampleTwo = new ExampleClass("Jane", "Doe", 25)
// console.log(exampleOne.greet())

class Profile {
    constructor(firstName, lastName, quote, skills, imgURL) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.quote = quote,
        this.skills = skills,
        this.imgURL = imgURL
    }

    getFullName() {
        return this.firstName + " " + this.lastName
    }

    listSkills() {
        let skillList = ""
        this.skills.forEach((skill) => {
            skillList += `<li>${skill}</li>`
        })
        return `${skillList}`
    }

    getHTML() {
        let html = `
        <article class="student-card">
            <img src=${this.imgURL} />
            <h2>${this.getFullName()}</h2>
            <blockquote>${this.quote}</blockquote>
            <h3>Skills</h3>
            <ul>
                ${this.listSkills()}
            </ul>
        </article>
        `
        return html
    }
}

class PremiumProfile extends Profile {
    constructor(firstName, lastName, quote, skills, imgURL, contactLink) {
        super(firstName, lastName, quote, skills, imgURL)
        this.contactLink = contactLink
    }

    getHTML() {
        let html = `
        <article class="student-card">
            <img src=${this.imgURL} />
            <h2>${this.getFullName()}</h2>
            <blockquote>${this.quote}</blockquote>
            <h3>Skills</h3>
            <ul>
                ${this.listSkills()}
            </ul>
            <a href=${this.contactLink}>Get in touch!</a>
        </article>
        `
        return html
    }
}

const charlie = new PremiumProfile(
    "Charlie",
    "Richardson",
    "It doesn't get easier, you just get faster",
    ["html", "css", "jacascript"],
    "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
    "https://google.com"
)

const exampleOne = new Profile(
    "John",
    "Doe",
    "It doesn't get easier, you just get faster",
    ["html", "css", "jacascript"],
    "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
)

const exampleTwo = new Profile(
    "Jane",
    "Doe",
    "It doesn't get easier, you just get faster",
    ["html", "css", "jacascript"],
    "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
)

const studentContainer = document.querySelector(".students-container")

studentContainer.innerHTML += charlie.getHTML()
studentContainer.innerHTML += exampleOne.getHTML()
studentContainer.innerHTML += exampleTwo.getHTML()