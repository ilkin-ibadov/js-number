// Number methods

let num = 10.345

// rounds numbers after . to given degree
let roundedNum = num.toFixed(2)

// Converts number to string
let string = num.toString()

// Converts string to number
let intNumber = parseInt(string)
let floatNumber = parseFloat(string)

// rounds number to integer
console.log(Math.round(num))

// Rounds number to next int
console.log(Math.ceil(num))

// Rounds number to previous int
console.log(Math.floor(num))

const colors = ["red", "blue", "green", "yellow", "black"]

const randomColor = colors[Math.floor(Math.random() * colors.length)]

console.log(randomColor)


// Object methods
const person = {
    name: "Ilkin",
    lastname: "Ibadov",
    greet: function () {
        console.log("Hello" + " " + this.name + " " + this.lastname)
    }
}

person.greet()
