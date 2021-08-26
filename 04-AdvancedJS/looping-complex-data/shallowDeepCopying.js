const simpleArray = [1, 2, 3];
const simpleObject =  { key: "value"}

const shallowArrayCopy = simpleArray;
const shallowObjectCopy = simpleObject;

// simpleArray.push(4);
// simpleObject.newKey = "new value";

// console.log(shallowArrayCopy);
// console.log(shallowObjectCopy);

// Deep copy
// spread operator -> 

const deepArrayCopy = [...simpleArray];
const deepObjectCopy = {...simpleObject};

simpleArray.push(4);
simpleObject.newKey = "new value";

// console.log(deepArrayCopy);
// console.log(deepObjectCopy);

// Nested objects

const complexArray = [[1], [2], [3]];
const complexObject = {data: {key: "value"}};

const complexArrayCopy = complexArray.map(array => [...array]);
const complexObjectCopy = {...complexObject, data: {...complexObject.data}};

complexArray[0].push(2);
complexObject.data.newKey = "new value";

console.log(complexArrayCopy)
console.log(complexObjectCopy)

// JSON

const jsonObject = JSON.stringify(complexObject);
const parsedJASON = JSON.parse(jsonObject)

