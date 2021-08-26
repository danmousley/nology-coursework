// class Book {
//     constructor(title, author, genre, year) {
//         this.title = title;
//         this.author = author;
//         this.genre = genre;
//         this.year = year;
//     }

//     getSummary() {
//         return `${this.title} is written by ${this.author}. This genre is ${this.genre} and it was published in ${this.year}.`;
//     }
    
// }


// const book1 = new Book("Harry Potter and the Half-Blood Prince", "JK Rowling", "Fiction", 2009);
// console.log(book1);

// class Mazagazine extends Book {
//     constructor(title, author, genre, year, length) {
//         super(title, author, genre, year)
//         this.length = length;
//     }
// }

// const mag1 = new Mazagazine("Mag One", "Sam Joyce", "Tech", 2011, 100)
// console.log(mag1.getSummary());

// class Employee {
//     constructor(name, rating, grade, nextGrade) {
//         this.name = name
//         this.rating = rating
//         this.grade = grade
//         this.nextGrade = nextGrade;
//     }

//     caclulatePromotionChances() {
//         if (this.rating >= 7) {
//             return `${this.name} is likely to be promoted`
//         } else {
//             return `${this.name} is likely to remain in their current position`
//         }
//     }

// }

// let john = new Employee("John Smith", 6, "Junior dev", "Senior dev")
// console.log(john.caclulatePromotionChances())

class Vehicle {
    constructor(color, gears, topSpeed, handling) {
        this.color = color
        this.gears = gears
        this.topSpeed = topSpeed
        this.handling = handling
    }

    getSpeed() {
        return `The top speed is ${this.topSpeed}mph`
    }

    changeSpeed(change) {
        this.topSpeed += change
        return `The new top speed is ${this.topSpeed}mph`
    }
}

class Car extends Vehicle {
    constructor(color, gears, topSpeed, handling, registration) {
        super(color, gears, topSpeed, handling)
        this.registration = registration
    }
}

class MakeOfCar extends Car {
    constructor(color, gears, topSpeed, handling, registration, make) {
    super(color, gears, topSpeed, handling, registration)
    this.make = make
    }

    thisTest() {
        return this;
    }
    
}

danBmw = new MakeOfCar("red", 6, 200, 7, "M4D DAN", "BMW")

console.log(danBmw.thisTest())

