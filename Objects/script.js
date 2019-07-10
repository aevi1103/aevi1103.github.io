//Evaluate these:
//#1
[2] === [2] ;//false
// {} === {}; // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1; // 4
const object3 = object2;  // 4
const object4 = { a: 5};  // 5
object1.a = 4; // 4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound() {
        console.log(`moooos ${this.name}, ${this.type} and ${this.color}`);
    }
}

const cow = new Mamal("aebbie", "kalabaw", "pink").sound();
console.log(cow)


// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const hasJohn = dragons.includes('John');
console.log('hasJohn', hasJohn); //false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const hasJohn2 = dragons2.filter((e) => e.includes('John'));
console.log('hasJohn2', hasJohn2); // ['Johnathan']


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power = number => number**100;
console.log('power', power(5));



// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
console.log('power1000', power(10000));

console.error('########### es8 objects ###########')

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢'; 
let rabbit = '🐇';

turtle = turtle.padStart(10)
rabbit = rabbit.padStart(10)

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

console.log(turtle); //🐢=======


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

const str = Object.entries(obj).map(e => e.join(" ")).join(' ');
console.log(str);


console.error('###########  advance looping ###########');

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

console.log('max num', Math.max(...array));


function biggestNumberInArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        const a = arr[i];
        
    }
}

function biggestNumberInArray2(arr) {

}

function biggestNumberInArray3(arr) {

}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {

}