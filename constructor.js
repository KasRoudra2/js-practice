// Factory Function/ Normal Function
const FacFunc = function (name, age) { //Supports arrow function 
    let obj={}; //Requires custom declation and assignment
    obj.name = name;
    obj.age = age;
    obj.play = function (game1, game2) {
        console.log(`${this.name} is playing ${game1} and ${game2}`)
    }
    return obj; //Requires return
}
//Pro: No need to write "new"
//Con: Do not have own "this" keyword

// Constructor Function
const ConFunc = function (name, age) { //Cannot be written as arrow function
    //let obj;
    this.name = name;
    this.age = age;
    this.play = function (game1, game2) {
        console.log(`${this.name} is playing ${game1} and ${game2}`)
    }
    //return obj;
}
//Pro: Intended to create objects, owns a "this"


// Class
class ClassFunc {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    play (game1, game2) {
        console.log(`${this.name} is playing ${game1} and ${game2}`)
    }
}
//Pro: Returns a class like object




// Testing


person1 = FacFunc("Kas", "18");
person2 = new ConFunc("Kas", "18");
person3 = new ClassFunc("Kas", "18");

console.log({ person1, person2, person3 })

/* Call */

// Runs a method(play from person3) to another object(person4) which does not own that method
const person4 = {
    name: "John Doe",
    age: "28"
}
person3.play.call(person4, "cricket", "football") // First argument of call is the "this" for play method. Rest arguments of call are passed to play method as normal arguments.

/* Apply */

// Runs a method(play from person3) to another object(person4) which does not own that method

const argumentArray = ["cricket", "football"]
person3.play.apply(person4, argumentArray) // First argument of apply is the "this" for play method. Second argument is an array of arguments to be passed to play method

/* Bind */

// Returns a function with binded (hardcoded) values given in arguments

const person4Play = person3.play.bind(person4, "cricket", "football") // First argument of call is the "this" for play method. Rest arguments of call are passed to play method as normal arguments.

person4Play() /* function person4Play () {
                     console.log(`${person4.name} is playing cricket and football`)
                 }*/

/* Outputs are same: `John Doe is playing cricket and football` */