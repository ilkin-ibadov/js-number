let a = "   Hello World.  "
let txtWithoutPadding = "javascript"

console.log(a.length) // returns number of characters in a string

console.log(a.trim()) // removes spaces from beginning and end of string

const paddedTextStart = txtWithoutPadding.padStart(txtWithoutPadding.length + 3, " ") // adds given string to the beginning given times
const paddedTextEnd = txtWithoutPadding.padEnd(txtWithoutPadding.length + 3, " ") // adds given string to the end given times

// for merging strings together
let text1 = "Hello";
let text2 = "World";
let mergedTextUsingMethod = text1.concat(" ", text2);
let mergedText = text1 + " " + text2

// for getting character at given index 
let selectedIndexUsingMethod = text1.at(2)
let selectedIndex = text1[2]

let partOfString = text1.slice(0, 2) // returns part of string slice(startIndex, endIndex) endIndex is not included
// if endIndex is not given, starting from startIndex, returns rest of the string to the end
// if startIndex and endIndex is negative, process works from opposite side
// substring() method is similar to slice() difference is startIndex and endIndex cannot be negative

// to transform text to either uppercase or lowercase
let lowercaseTxt = "hello"

console.log(lowercaseTxt)

let uppercaseTxt = lowercaseTxt.toUpperCase()

console.log(uppercaseTxt)

let lowercaseAgain = uppercaseTxt.toLocaleLowerCase()

console.log(lowercaseAgain)

// to repeat text given times
let text3 = "Hello world!";
let result = text3.repeat(4);

// to replace part of text with another text
let text4 = "Please visit Microsoft and Microsoft!";
let replacedText = text4.replace("Microsoft", "StepIT");
let replacedAllText = text4.replaceAll("Microsoft", "StepIT");


let txtToWords = text4.split(" ") // Splits string to parts by given character, outputs an array
console.log(txtToWords)

let txtIncludesWord = text4.includes("Microsoft") // checks if string contains given word
let startSearchingFromIndex = text4.includes("Please", 6) // starts checking from given index

let text = "Please locate where 'locate' occurs!"; // searches text, returns starting index of given word
text.search("locate");

let text5 = "The rain in SPAIN stays mainly in the plain"; // searches for any match, multiple locations, case-insensitive
console.log(text5.match(/ain/gi))