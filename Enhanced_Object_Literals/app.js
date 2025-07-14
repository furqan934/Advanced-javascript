//Enhanced Object Literals :
// in JavaScript (introduced in ES6) allow you to create objects in a shorter, cleaner, and more dynamic way. They improve the syntax of defining object properties, methods, and dynamic keys.

// // before Property 
// const name = "Furqan";
// const age = 20;

// // const person = {
// //   name: name,
// //   age: age
// // };
// // after Property Shorthand
// const person = {
// name,
// age
// };
// console.log(person); // { name: 'Furqan', age: 20 }

// // before Method Definition
// const person2 = {
//   name: "Furqan",
//   age: 20,
//   greet: function() {
//     console.log("Hello, my name is " + this.name);
//   }
// };
// // after Method Definition
// const person3 = {
//   name: "Furqan",
//   age: 20,
//   greet() {
//     console.log("Hello, my name is " + this.name);
//   }
// };
// person3.greet(); // Hello, my name is Furqan
// // Dynamic Property Names
// const key = "age";
// const person4 = {   
//     name: "Furqan",
//     [key]: 20 // using computed property names
//     };
// console.log(person4); // { name: 'Furqan', age: 20 }
// // Nested Objects
// const person5 = {
//   name: "Furqan",
//   address: {
//     city: "Karachi",
//     country: "Pakistan"
//   }
// };
// console.log(person5.address.city); // Karachi

//combining all features 
// const name = "Furqan";
// const age = 20;
// const key = "age";
// const key2 = "country";
// const person6 = {
//   name,
//   age,
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
//   [key2]: "Pakistan",
//   address: {
//     city: "Karachi",
//     [key]: 20
//   }
// };
// console.log(person6); // { name: 'Furqan', age: 20, greet: [Function: greet], country: 'Pakistan', address: { city: 'Karachi', age: 20 } }
// person6.greet(); // Hello, my name is Furqan


// real life uage case 
function createUser(name, age, city) {
  return {
    name,
    age,
    city,
        greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old from ${this.city}.`);
    }
  };
}
const user1 = createUser("Furqan", 20, "Karachi");
const user2 = createUser("Ali", 25, "Lahore");
user1.greet(); // Hello, my name is Furqan and I am 20 years old from Karachi.
user2.greet(); // Hello, my name is Ali and I am 25 years old from Lahore.
