let a = "   Hello World!   "
console.log(a.length) // get string's character count

// get character at given index
console.log(a.at(0)) 
console.log(a[0])

// merge strings together
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
// console.log(text1 + " " + text2)

console.log(a.trim()) // trim() removes whitespace from both ends of string
// trimStart() removes whitespace from beginning of string
// trimEnd() removes whitespace from end of string

let paddedStringStart = text1.padStart(text1.length + 3, " ") // adds given character to the beginning of string given times
let paddedStringEnd = text1.padEnd(text1.length + 3, " ") // adds given character to the end of string given times

console.log(text2.repeat(3)) // repeats string given times

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);
// slice(startIndex, endIndex)
// endIndex is optional, if not present, slice() returns string value after given index
// if indexes are negative, we count indexes from right

// substring() exactly same as slice, only difference is it does not accept negative indexes

let txtToUppercase = text1.toUpperCase() // string to uppercase

let txtToLowercase = txtToUppercase.toLowerCase() // string to lowercase

let text5 = "Please visit Microsoft!";
let newText = text5.replace("Microsoft", "W3Schools"); // replaces given text with second parameter
// we can use "" as second parameter to remove a word
// replaceAll() replaces all matching words with given word

let sentenceToWords = text5.split(" ") // splits sentence to words, returns array
let wordToCharacters = text1.split("")

console.log(wordToCharacters)

console.log(text5.includes("visit")) // returns true if string contains given word, else returns false

console.log(text5.startsWith("Please")) // returns true if string starts with given word, else returns false
// endsWith() method returns true if string ends with given word, else returns false

// indexOf() returns starting index of first matching word, lastIndexOf() returns starting index of last matching word

// Both indexOf() and lastIndexOf() accepts optional second parameter, if given starts searching from that index

// Both indexOf() and lastIndexOf() returns -1 if no match is found

console.log("indexOf: ", text5.indexOf('microsoft')) // returns false, does not accept regular expression

console.log("search: ", text5.search(/microsoft/i)) // returns true, can work with both lowercase and uppercase

