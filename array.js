/* Global Arrays*/
const nameArray = [ "LWS", "CineSeries", "BigganPiC", "Bong Factorium", "Programming With Mosh", "Code With Harry"]
const numArray = [ 1,2,3,4,5,6,7,8,9 ]
const largeNumArray = [20, 50, 130, 700, 2200]

/* Filter */

// Returns new array with the elements for which the argument function returns true

const filteredNumArray = numArray.filter(x=>x%2==0) // Gets each element as x and iterate over them. Values matching condition are returned in new array.

console.log(filteredNumArray) // [2, 4, 6, 8]

/* Sort */

// Changes main array, then returns main array


const sortedArray = [...nameArray].sort() // A way to immutably sort an array.
console.log(sortedArray) //  ["BigganPiC", "Bong Factorium", "CineSeries", "Code With Harry", "LWS", "Programming With Mosh"]

largeNumArray.sort() //Array elements are considered to be string, sort is done by first character of string. 1<2<5<7 is measured here
console.log(largeNumArray) // [130, 20, 2200, 50, 700] 

const sortNumArray = [...largeNumArray].sort((x,y)=>x-y) // The function sent as argument in sort method iterates over every possible two combinations and the positive value of (x-y) informs sort method that x should be sorted after y (and vice versa).
console.log(sortNumArray) // [20, 50, 130, 700, 2200]
 

/* Revert */

// Changes main array, then returns main array

const revertedArray = [...nameArray].reverse() // A way to immutably sort an array.

console.log(revertedArray) //  ["Code With Harry", "Programming With Mosh", "Bong Factorium", "BigganPiC", "CineSeries", "LWS"]



/* Pop, Shift */

// Changes main array, decrease array length, then returns deleted element
const a1 = [...nameArray] 
a1.shift() // Deletes First Element (LWS)
console.log(a1) // ["CineSeries", "BigganPiC", "Bong Factorium", "Programming With Mosh", "Code With Harry"]
const a2 = [...a1]
a2.pop()// Deletes Last Element
console.log(a2) // ["CineSeries", "BigganPiC", "Bong Factorium", "Programming With Mosh"]

/* Delete */

// Changes main array, mutate that value into undefined, doesn't mutate array length, then returns true
const a3 = [...nameArray]
delete a3[0]
console.log(a3) // [undefined, "BigganPiC", "Bong Factorium", "Programming With Mosh"]


/* Splice */

// Delete from any index(1st argument), delete any number of elements(2nd argument), add as many elements(rest arguments). Changes main array, then returns deleted elements

const a4 = [...a3]
a4.splice(0,2, "Rnar", "Antik Mahmud") // Deletes element between 0 and 2 which were nameArray[0]/nameArray[1] and add third and fourth argument as nameArray[0], nameArray[1]
console.log(a4) //  ["Rnar", "Antik Mahmud", "Bong Factorium", "Programming With Mosh"]



/* Push, Shift*/

// Changes main array, increase array length, then returns added element

const a5 = [...a4]
a5.push("Code With Harry") // Adds element from last
console.log(a5) // ["Rnar", "Antik Mahmud", "Bong Factorium", "Programming With Mosh", "Code With Harry"]
const a6 = [...a5]
a6.unshift("LWS") // Adds element from first
console.log(a6) // ["LWS", "Rnar", "Antik Mahmud", "Bong Factorium", "Programming With Mosh", "Code With Harry"]


/* Every, Some */

const isEverySmall = numArray.every((x)=>x<10) // Is true if each and every element of array passes test in argument funtion
console.log(isEverySmall)

const isSomeSmall = numArray.some((x)=>x<6) // Is true if at least one element of array passes test in argument funtion
console.log(isEverySmall)
/* IndexOf, FindIndex */

// Returns positive index for found value and -1 for not found
const index = numArray.indexOf(3) // Takes a string as argument and returns the index of only first match

console.log(index) // 2 (index of 3)

const index2 = numArray.findIndex(x=>x>4) // Takes a funtion as argument and returns the index of only first match
console.log(index2) // 4 (index of 5)



/* Join, toString, Reduce */

// Joins all elements of array and returns a string

const joinedString = nameArray.join(" ") // Adds argument value between elements
console.log(joinedString)

const convertedString = nameArray.toString() // Adds "," between elements
console.log(convertedString)

const reduced = nameArray.reduce((total, current)=>total+current) // Similar to join, but it can be used for arithmetic operations of all elements
console.log(reduced)

/**/
