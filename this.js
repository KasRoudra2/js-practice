/*New Binding*/

class newClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const newFunc = function (name, age) { 
    this.name = name;
    this.age = age;
}
const person1 = new newClass("Kas", 18); // this = person1
const person2 = new newFunc("Kas", 18); // this = person2
console.log({person1, person2})


/* Implicit Binding */
const ImFunc = () => {
    return {
        name: "Kas",
        age: 18,
        play: function() {
            console.log(this.name+" is playing") // this = (parent object of play)
        }
    }
}
ImFunc().play() // Kas is playing


/* Explicit Binding */

const Man = function (name, age) { 
    let obj={}; 
    obj.name = name;
    obj.age = age;
    obj.play = function (game1, game2) {
        console.log(`${this.name} is playing ${game1} and ${game2}`)
    }
    return obj; 
}
const man = Man("Kas", 18)  // Objects from class constructors are also allowed 

// First argument becomes "this" within actual method


// Call 
const man2 = {
    name: "John Doe",
    age: "28"
}
man.play.call(man2, "cricket", "football") // this = man2

// Apply 
const argumentArray = ["cricket", "football"]
man.play.apply(man2, argumentArray) // this = man2

// Bind
const man2Play = man.play.bind(man2, "cricket", "football") // this = man2
man2Play() 


/* Window Binding */

// Refers to global (for nodejs) or windows (for vanilajs) if no binding of above three matches

const test = () => {
    console.log(this)
}
test()