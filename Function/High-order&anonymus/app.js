//HOF Taking a Function as an Argument

// function greetUser(name) {
//   console.log("Hello, " + name);
// }

// function processUser(callback) {
//   const username = "Furqan";
//   callback(username); // HOF calls the callback
// }

// processUser(greetUser); // Output: Hello, Furqan

//HOF Taking a Function as an return
function greet(a)
{  
    return function(b){
   console.log(a + b);
    }
}
let a = greet(2);
console.log(a(2));


// anonymus function 
const nums = [1, 2, 3];
const doubled = nums.map(function(num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6]
