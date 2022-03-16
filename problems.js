// Leap Year Solve
const ly = (year) => {
    console.log(`${year} is ${((year%400===0) || (year%4===0 && year%100!==0)) ? "": "not " }a leap year`)
};
ly(2013);


// Sort an array
const largeNumArray = [20, 550, 1300, 70, 2200]
const sortNumArray = [...largeNumArray].sort((x,y)=>x-y) 
console.log(sortNumArray) // [20, 50, 130, 700, 2200]

// Vowel Counter
const arr = ["a","e","i","o","u"]
const check = (sentence) => {
    let count=0;
    const sen = [...sentence]
    sen.forEach((v)=>{
        if(arr.includes(v)) {
            count+=1;
        }    
    })
    return count;
}
console.log(check("Bangladesh"));

// Filter duplicates
const array =[1,2,3,3,4,6,5,5,7,8,2];
const duplicateless = (array) => array.filter((val, i) => array.indexOf(val)===i);
console.log(duplicateless(array)); // [1, 2, 3, 4, 6, 5, 7, 8]
const duplicateless2 = (array) => [...new Set(array)];
console.log(duplicateless2(array)); // [1, 2, 3, 4, 6, 5, 7, 8]

// Summation of all values 
const reduced = (array, initial) => array.reduce((total, current)=> total+current,initial)
console.log(reduced(array, 100))

// Sorting arguments
function myfunc(...arg) {
    console.log(arg.sort());
}
function myfunc2() {
    console.log([].slice.call(arguments).sort());
}
myfunc(1,3,2,6,3)
myfunc2(1,3,2,6,3)

/* Object to array */
// Just add an iterator
const iterableObj = {
    key1: "SomeValue1",
    key2: "SomeValue2",
    key3: "SomeValue3",
    [Symbol.iterator]: function (){
        let values = Object.values(this);
        let len = values.length;
        let fixedLen = len;
        return {
            next() {
                if (len>0){
                    let result = { done: false, value:values[fixedLen-len] }
                    len--;
                    return result;
                }
                return { done: true };
            }
        }
    }
}
const iterated = [...iterableObj];
console.log(iterated);

// Iterable object using generator
const iterableObj2 = {
    key1: "SomeValue1",
    key2: "SomeValue2",
    key3: "SomeValue3",
    [Symbol.iterator]: function* (){
        let values = Object.values(this);
        for(let value of values){
            yield value;
        }
    }
}
const iterated2 = [...iterableObj2];
console.log(iterated2);


// Keys should be number, a length property is required (array will be of that length, no matter how many keys)
const obj = {
    0: "SomeValue1",
    1: "SomeValue2",
    2: "SomeValue3",
    length: 3
}
const arrToObj = Array.prototype.slice.call(obj);
console.log(arrToObj);

// Filter duplicate words from sentence
const str = "Bangladesh is a a beautiful country beautiful";
const strToArr = [...new Set(str.split(" "))];
console.log(strToArr.join(" "));

// Flatting array
const mulDiArray = [1,[2,[3,[4],5],6],7,[8,9]];
const flatArray = mulDiArray.flat(Infinity); // required Infinity for more than two dimensions
console.log(flatArray);

// Resizing an array
const resizable = [...new Set(array)];
resizable.length = 3; // Direct resize
console.log(resizable);
const resizable2 = [...new Set(array)];
const resized = resizable2.slice(0,3); // immutable resize
console.log(resized);


// Value swap
let a = 5;
let b = 6;

[ a, b ] = [ b, a ];
console.log(a,b); // 6 5
a = b + (b = a) - a;
console.log(a,b) // 5 6
let temp = a;
a = b;
b = temp;
console.log(a,b); // 6 5

// Array Value Swap
const array1 = [ 1, 2, 3, 4, 5 ];

[array1[1],array1[4]] = [array1[4],array1[1]]
console.log(array1) // [1, 5, 3, 4, 2]

const array2 = [...array1]
temp = array2[1];
array2[1] = array2[4];
array2[4] = temp;
console.log(array2); // [1, 2, 3, 4, 5]

// Array Compare

const arr1 = [ 1, 2, 3, 4, 5 ];
const arr2 = [ 1, 2, 3, 4, 5 ];

const arrEqual = (arr1, arr2) => {
    return arr1.length === arr2.length && arr1.every((x,i)=>x===arr2[i]);
};
console.log(arrEqual(arr1,arr2)); // true

// Object Compare

const ob1 = {
    key1: "SomeValue1",
    key2: "SomeValue2",
    key3: "SomeValue3"
};
const ob2 = {
    key1: "SomeValue1",
    key2: "SomeValue2",
    key3: "SomeValue3"
};

const objEqual = (obj1, obj2) => {
    const keys = Object.keys(obj1);
    const keys2 = Object.keys(obj2)
    if(!arrEqual(keys,keys2)) return false;
    let isEqual = false;
    for(let key of keys) {
        if (obj1[key] === obj2[key]){
            isEqual = true;
        }
        else {
            isEqual = false;
            break;
        }
    }
    return isEqual;
};

console.log(objEqual(ob1,ob2)); // true

const objEqual2 = (obj1, obj2) => {
    const objArr1 = Object.entries(obj1);
    const objArr2 = Object.entries(obj2);
    return objArr1.length === objArr2.length &&
               objArr1.every((a,i)=>
                   a.every((b,j)=>
                       b===objArr2[i][j]));
  
};

console.log(objEqual2(ob1,ob2)); // true

const objEqual3 = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const values1 = Object.values(obj1);
    const values2 = Object.values(obj2);
    return keys1.length === keys2.length && 
           keys1.every((x,i)=>x===keys2[i]) && 
           values1.every((x,i)=>x===values2[i])
  
};

console.log(objEqual3(ob1,ob2)); // true

// Shuffle Array

const sortArray = [ 1, 2, 3, 4, 5 ];
sortArray.sort(()=> Math.floor(Math.random()*11)-5);
console.log(sortArray);

// Get Random Integer
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};
console.log(getRndInteger(1,100));


// A function that copies an innertext into clipboard

const copyToClipBoard = (text) => {
    const element = document.createElement("textarea");
    element.value = text;
    document.body.appendChild(element)
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
}

// Filter a object with allowed keys array as argument
const allowed = [ "key1", "key3", "gdhdj"];
const filterableObj = {...ob1}

const filterObj = (obj, allowed) => {
    let object = {};
    for (let element of allowed){
        if(obj[element]) object[element] = obj[element];
    }
    return object;
}
console.log(filterObj(filterableObj, allowed));

Object.prototype.fromEntries = (array) => { // Required for eruda
    let obj = {};
    for(let element of array){
        for (let ele of element){
            if(ele!==element[1]) obj[ele] = element[1]
        }
    }
    return obj;
}

const filterObj2 = (obj, allowed) => Object.fromEntries(Object.entries(obj).filter(x=>allowed.includes(x[0])));
console.log(filterObj2(filterableObj, allowed));

const filterObj3 = (obj, allowed) => Object.keys(obj)
  .filter(key => allowed.includes(key))
  .reduce((ob, key) => {
    ob[key] = obj[key];
    return ob;
  }, {});

console.log(filterObj3(filterableObj, allowed));


// Result of all: { key1: "SomeValue1", key3: "SomeValue3" } 

// Filter falsy values from array
const falsyArray = ["SomeValue", false, "SomeString",NaN];
const filteredArray = falsyArray.filter(Boolean);
console.log(filteredArray) // ["SomeValue", "SomeString"]
const filteredArray2 = falsyArray.filter(x=>!!x);
console.log(filteredArray2) // ["SomeValue", "SomeString"]

// Filter falsy values from object
const mixed ={
    key1: "SomeValue1",
    key2: "",
    key3: undefined,
    key4: NaN,
    key5: "SomeValue5"
}

const filterFalsyObj = (obj) => {
    for(let key in obj) {
        if(!obj[key]) delete obj[key];
    }
    return obj;
}
console.log(filterFalsyObj(mixed)) // { key1: "SomeValue1", key5: "SomeValue5" }

// Filter an array with another array
const mainArray = [ 1, 2, 3, 4, 5 ];
const filtArray = [ 1, 4, 6 ];

const filterArray = (mainArray, filtArray) => mainArray.filter(x=>1-filtArray.includes(x));
console.log(filterArray(mainArray,filtArray)); // [2, 3, 5]

// Common values of array
const common = (mainArray, filtArray) => mainArray.filter(x=>filtArray.includes(x));
console.log(common(mainArray,filtArray)); // [1, 4]


// Find a word and its index in a semtence
const sentence = "Some random text without random meaning!";
const matches = (match) => sentence.match(new RegExp(match, "g")) ? sentence.match(new RegExp(match, "g")).length : 0 ;
console.log(matches("random"));
const indexWord = (word) => sentence.split(" ").indexOf(word)!==-1 ?  sentence.split(" ").indexOf("text") : "Not found" ;
console.log(indexWord("text"));

// Replace all occurences
const replaceAll = (sentence, old, newer) => sentence.replace(new RegExp(old, "g"),newer);
console.log(replaceAll(sentence,"random", "some"))

// Get longest word
const getLongest = (sentence) => {
    let longest = ""
    for (let i of sentence.split(" ")){
        if (i.length > longest.length) longest = i;
    }
    return longest;
}
console.log(getLongest(sentence));

// One liner addition (Limited to thousand numbers)
const sum = (n) => n && (sum(n-1) + n);
console.log(sum(10));

// closure in for loop
const varf = () => {
  for(var i=0; i<3; i++){
    const func = () => { // It has a closure of i=3, all async function under func will receive this value of i
        setTimeout(function(){console.log(i)}, i*1000); // 3 3 3
    }
    func(); // No i passed, so the i in setTimeout will refer to parent function scope i which is has already become 3
  }
};
varf();
const varf2 = () => {
  for(var i=0; i<3; i++){
    const func = (i) => { // It has no closure nor block scope
        setTimeout(function(){console.log(i)}, i*1000); // 0 1 2
    }
    func(i); //This i changes in every loop because func is synchronus and immediate child of for
  }
};
varf2();
const letf = () => { 
  for(let i=0; i<3; i++){
    const func = () => { // It has a block scope of i=0,1,2
        setTimeout(function(){console.log(i)}, i*1000); // 0 1 2
    }
    func(); // i in setTimeout refers to parent block scope i changes in every iteration
  }
};
letf();


// A toggle Function for array, 
const somearr = ["One", "Two", "Three"]
somearr.toggle = function (clas) {
    if (!clas) return; 
    this.includes(clas) ? this.splice(this.indexOf(clas),1) : this.push(clas)
}
//const any = somearr.toggle("Two")
somearr.toggle("Two")
console.log(somearr)

// Asynchronus timeout sort🥴
var newArr=[];
largeNumArray.forEach((i)=>{
    setTimeout(function() {newArr.push(i)}, i);
}, console.log(newArr))
//setTimeout(function() {console.log(newArr)}, 5000);

// Double for sort
var tempu=[];
for (let i of largeNumArray) {
    for (let j of largeNumArray) {
        if (i>=j && !tempu.includes(j)) {
            tempu.push(j);
        }
    }
}
console.log(tempu);