// // call back function
// //A callback function is a function passed as an argument to another function, and executed later, usually after some kind of task is completed.
// function greet(name)
// {
//     console.log("hello",name);
// }
// function hi(callback){
//     const userName = "furqan";
//     callback(userName);
// }
// hi(greet);


// synchronus callback
// function calculate(a, b, callback) {
//   return callback(a, b);
// }

// function add(x, y) {
//   return x + y;
// }

// console.log(calculate(5, 3, add)); // Output: 8
// ✅ Here, add is executed synchronously as part of calculate.

// asynchronus callback

// setTimeout( function(){
//     console.log("excutred after 2 sedcend");
// },2000);

function fetchData(callback) {
  setTimeout(() => {
    const data = { user: "Furqan", age: 22 };
    callback(data); // Call the callback with data
  }, 1000);
}

function handleData(user) {
  console.log("User loaded:", user);
}

fetchData(handleData); // Output after 1 sec: User loaded: {user: "Furqan", age: 22}
