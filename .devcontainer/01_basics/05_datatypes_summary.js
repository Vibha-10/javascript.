//primitive

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.8

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 32532856468793453875892n
//Reference(Non primitive)

//Array , objects, Functions
//Array
const heros = ["shaktiman", "naagraj", "doga"]
//object
let myObj ={Name: "Vibha", 
            age: 22,
}

//funtions

/*const myFunction = Function()
    console.log("Hello world");



console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof outsideTemp);
console.log(typeof isLoggedIn);
console.log(typeof myFunction);
console.log(typeof myObj);*/


// stack(primitive) , Heap(Non primitive)

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "ashhkj@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "vibh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

