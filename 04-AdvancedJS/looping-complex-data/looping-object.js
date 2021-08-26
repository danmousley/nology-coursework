const validMessage = {
    userName: "Charlie",
    content: "Have a great day"
}

const invalidMessage = {
    userName: "Charlie",
    error: 163734
}

// for (let key in message) {
//     console.log(key)
//     console.log(message[key])
// }

// let looper = (messageObject) => {
//     for (let key in messageObject) {
//         if (typeof messageObject[key] !== 'string') {
//             return false
//         } else {
//             return true
//         }
//     }
// }

// console.log(looper(validMessage))

// const validMessagevalues = Object.values(validMessage)
// const inavlidMessageValues = object.values(invalidMessage)

// console.log(validMessagevalues)
// console.log(inavlidMessageValues)

// console.log(validMessagevalues.every((validMessage) => {
//     const typeCheck = typeof validMessage === "string";
//     return typeCheck;
// }))

validKeys = [ 'userName', 'content' ]

let checker = (messageObject, validKeys) => {
    keys = Object.keys(messageObject)
    const keyCheck = console.log(keys)
    keys.every(key => {
        return validKeys.includes(key);
    })

    return keyCheck
}

// console.log(checker(validMessage, validKeys)) 

// const validMessageEntries = Object.entries(validMessage)
// const invalidMessageEntries = Object.entries(invalidMessage)

// console.log(validMessageEntries)
// console.log(invalidMessageEntries)

const validateMessageObject = (messageObject) => {
    const objectEntries = Object.entries(messageObject)

    const validation = objectEntries.every((entry) => {
        const key = entry[0]
        const value = entry[1]

        const typeCheck = typeof(value) === "string";
        const validKeys = ["userName", "content"]
        const keyCheck = validKeys.includes(key)

        return typeCheck && keyCheck
    })

    return validation
}