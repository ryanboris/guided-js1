//1st pass - keywords (var, let, const, function) identifies and creates a reference in memory
//2nd pass - assign by value - data to each of these keywords

//String*
//Number*
//Boolean(Bool)*
//Null
//Objects
//Arrays
//Functions
//NaN

// console.log(typeof 'hey')

// //variable
// //var* - avoid this

// //let, const

// var aVariable //declared
// aVariable = 12
// aVariable
// console.log(typeof aVariable)
// //initialize

//console.log(b)

// var aVar
// aVar = 'hi'

// console.log(aVar)

// var aVar = 'hi'
// var anotherVar = null

//not defined
//undefined
//null
// 0
// {}
// let x = 3 //?
// let y = 10 //?

// x = 34 //?

// y = 3498

//argument

// function myFunc(x) {
//  x = x + 1
//  return x
// }

// function myOther() {
//   return 3
// }

// const x = 10000

// console.log(myFunc(1))
// console.log(myFunc(4))
// console.log(myFunc(100))
// console.log(myFunc(x))
// console.log(myFunc(myOther()))

const arr = [1, 2, 3, 4]

const x = [0, 400, 5, 250, 22]
x[0] //?
x[1] //?

const obj = { breakfast: 'muffin' }
obj['breakfast'] //?

const meals = {
  breakfast: 'muffin',
  lunch: 'skipped',
  supper: 'cereal'
}

arr.map(number => number * 2) //?
arr.filter(number => number % 2 === 0) //?
arr.reduce((x, y) => x + y) //?
