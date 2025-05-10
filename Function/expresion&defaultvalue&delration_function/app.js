// function 
// 1>.function declaration and definition
// function greet(){
//     console.log("hello world");
// }
// greet();
//function with parameter and returning valuee
// function add (a,b){
//     return a + b;
// }
// console.log(add(2,3));
// console.log(add());

// function with seting default value  paramter 
//to avoiding the error of undefined!
// function greet(message = "Guest"){
//     console.log("hello:",message);
// }
// greet("furqan");
// greet();

// function makeRequest(url, timeout = 3000) {
//   console.log(`Requesting ${url} with timeout of ${timeout}ms`);
// }

// makeRequest("https://api.example.com"); // Uses 3000ms
// makeRequest("https://api.example.com", 10000); // Custom timeout

//function expression :
let greet = function(){
    console.log("hello!");
}
// greet();
// show function value
// console.log(greet);
// show function code:
let func = greet;
func();