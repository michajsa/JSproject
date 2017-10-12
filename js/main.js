// // print "Hello world" to the console
// console.log("Hello World")
// // print "Hello World" to the web page (aka, the document)
// document.write("Hello World")
// prints a message in a pop up box
// alert("Hello World")


// var name = prompt("What's your name?")
// console.log(name)
// number
// var numberValue = 12
// var numberValue2 = Number(prompt("choose a number between 1 - 100"))
// boolean
// var boolValue = true
// string
// var stringValue = "Cake"
// // array
// var arrayValue = [33, false, "string"]
// number
// var five = 10 * 30
// console.log(five)
// // boolean
// var six = false
// // string
// var seven = "who"
// // array
// var eight = [22, true, "string"]

// var combineVariables = numberValue + numberValue2
// console.log(combineVariables)

// if/else statements
// if(numberValue > numberValue2) {
//   alert(numberValue + " is greater than " + numberValue2)
// } else if (numberValue < numberValue2){
//   alert(numberValue2 + " is greater than " + numberValue)
// } else {
//   alert("you chose the same number as me")

// comparison and logical operators
// var num1 = 6
// var num2 = 10
//
// //= assigns a value to a varuable
// //== tests to see if two values are equal
// //=== tests to see if two values are equal and are the same type
//
// if(num1 == 6 && num2 == 100) {
//   console.log("truel")
// } else {
//   console.log("false")
// }

// looping
// var username = prompt("whats your name ?")
//
// while(username != "Mike") {
//   username = prompt("what's your name?")
// }

// for(var i = 1; i <= 20; i++) {
//   document.write(i)
//

// var num1 = 10
// var num2 = 15
//
// function add(a, b) {
//   document.write(a * a)
// }
//
// add(num1 , num2)


// // print to the console
// console.log("Hello world")
// // print to the web page
// document.write("Hello World")
// console.log("Hello World")
// document.write("Hello World")
// console.log("hello world")
// document.write("hello world")

// saving the users data in a variable using a prompt
// var name = prompt("what's your name?")
// console.log(name)
// var name = prompt("what's your name?")
// console.log(name)
// var name = prompt("what's your name?")
// console.log(name)

// // number
// var one = 55
// // bollean
// var two = false
// // string
// var three = "hello"
// // array
// var four = [55, true, "hello"]

// // number
// var one = 44
// // boolean
// var two = true
// // string
// var three = "kitty"
// // array
// var four = [66, false, "kitty"]

// use .value to retrieve input data from a form
// function getInfo() {
//   var username = document.getElementById("username").value
//   var password = document.getElementById("password").value
//   console.log("your username is" + username + " and your password is" + password)
// }

// var cars = ["fiat", "benz", "honda", "toyota"]
// // console.log(cars.length)
//
// for(i = 0; i < cars.length; i++) {
//   if(cars[i] = "benz") {
//     console.log("You're driving a sweet " + cars[i])
//   }
// // console.log(cars[i])
// }

// var arr = [10, 55, 22, 87, 14]
// var biggest = 0
//
// for(i = 0; i < arr.length; i++) {
//   if(biggest < arr[i]) {
//     biggest = arr[i]
//     console.log(biggest)
//   }
// }

// console.log(biggest)

// var honda = {
//   model: "civic",
//   year: 2014,
//   color: "blue"
// }
// var toyota = {
//   model: "camry",
//   year: 2000,
//   color: "red"
// }
// var ford = {
//   model: "mustang",
//   year: 2005,
//   color: "black"
// }
// changing the value of the model .notaton
// console.log(ford.model)
// ford.model = "F150"
// console.log(honda.model)
// console.log(toyota.model)
// console.log(ford.model)

// var cars = [
//   {
//     make: "honda",
//     model: "civic",
//     year: 2014,
//     color: "blue"
//   },
//   {
//     make: "toyota",
//     model: "camry",
//     year: 2000,
//     color: "red"
//   },
//   {
//     make: "ford",
//     model: "mustang",
//     year: 2005,
//     color: "black"
//   },
// ]
// for(i = 0; i < cars.length; i++) {
//   if(cars[i].year < 2010) {
//     document.write(cars[i].make + ", " + cars[i].model)
//   }
//
// }
// var newDiv = document.createElement('div')
// newDiv.className = "addedClass"
// var textHere = document.createTextNode('write our text here')
// newDiv.appendChild(textHere)
// var addHere = document.getElementById('addHere')
// addHere.appendChild(newDiv)

// var newH1 = document.createElement('h1')
// var addHere = document.getElementById('addHere')
// addHere.appendChild(newH1)

// var x = 3.7
//
// console.log( Math.round(x))
//
// var y = 3.2
//
// console.log( Math.ceil(y))
//
// var f = 3.8
//
// console.log( Math.floor(f))


// var randomNum = Math.floor((Math.random() + 10) + 1)
//
// console.log(randomNum)

// var today = new Date()
//
// console.log(today.getMinutes())

// setTimeout(function(){alert("Hello"); }, 3000);

var osha = {
  name: 'Osha Thai',
  seats: 55,
  booked: 25,
  food: "Thai"
  availableSeating: function() {
    return this.seats - this.booked
  }
}
document.write(osha.availableSeating())
var oyama = {
  name: 'Oyama',
  seats: 20,
  booked: 15,
  food: "Sushi"
}

var saroor = {
  name: 'Saroor',
  seats: 40,
  booked: 25,
  food: "Indian"
}

function Restaurant(name, seats, booked, food) {
  this.name = name
  this.seats = seats
  this.booked = booked
  this.food = food
}

var osha = new Restaurant('Osha Thai', 55, 25, "Thai")
var oyama = new Restaurant('Oyama', 20, 15, "Sushi")
var saroor = new Restaurant('Saroor', 40, 25, "Indian")

document.write(osha.name)
document.write(saroor.seats)
