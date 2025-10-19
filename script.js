const numbers = [ 3, 4, 5]
console.log("Before:", numbers)

numbers.push(6) // Adds item to the end of array
numbers.unshift(0) // Adds item to the beginning of array

console.log("After:", numbers)

numbers.pop() // Removes item from end of array
numbers.shift() // Removes item from beginning of array

// console.log("After removing items:", numbers)

// delete numbers[0] // Deletes given index, leaves undefined values, dont use

// console.log("After deleting index 0:", numbers)

// const a = numbers.splice(1, 1, "Hello", true) // deletes starting from given index, by count of second parameter, adds items after second parameter (optional)

// const b = numbers.splice(2, 1) // to delete an item

// toSplice() same as splice(), does not modify original array

const c = numbers.slice(1, 4) // Returns a part of array, from-to (not including to)

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7]

const allNumbers = evenNumbers.concat(oddNumbers) // merges arrays

// console.log("Merge arrays using spread operator: ", [...evenNumbers, ...oddNumbers])

const multiDimensionalArr = [[1, 2], [3, 4], [5, 6]];
const singleDimensionArr = multiDimensionalArr.flat(); // Creates single dimensional array from multi dimensional array

const names = ["Ilkin", "Eli", "Abbas"]

const numberOfItems = numbers.length // Get array length

console.log(numberOfItems)

console.log(numbers[numberOfItems - 1]) // find last item

const namesString = names.toString() // create string containing all array items

const namesStringCustomSymbols = names.join(", ") // create string containing all array items, choose seperating symbol

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let indexOfItem = fruits.indexOf("Apple"); // finds first index of given value

// lastIndexOf() finds last index of given value

const itemExists = fruits.includes("Mango"); // returns true if item exists in array, else returns false

// sort() method sorts an array alphabetically

// reverse() method reverses the elements in an array

const doubledNumbers = numbers.map(number => number * 2) // map loops items, used for editing and creating new array

const oddNumbers2 = allNumbers.filter(number => number % 2 !== 0) // for returning array items that match given condition

const sum = numbers.reduce((acc, currentValue, index, array) => {
    acc = acc + currentValue
    return acc
}, 0) // to find sum of numbers

const wordCounts = fruits.reduce((acc, currentValue) => {
    acc[currentValue] = (acc[currentValue] || 0) + 1
    return acc
}, {}) // to find how many of each word exists in an array

// console.log(wordCounts)

const allGreaterThan2 = numbers.every((value) => value > 2) // returns true if all items in array meets condition, else returns false

// some() returns true if one or more item meets condition, else returns false

