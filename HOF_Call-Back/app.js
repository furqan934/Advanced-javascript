// high order function is a function that takes another function as an argument or returns a function as its result
// Example of a high order function in JavaScript
function highOrderFunction(callback) {
  return function() {
    console.log("Executing high order function");
    callback();
  };
}
const callbackFunction = () => {
  console.log("Callback function executed");
}
const resultFunction = highOrderFunction(callbackFunction);
resultFunction(); // Executing high order function

// real life exmple of hof and call back 
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Furqan" };
    callback(data);
  }, 2000);
}
fetchData((data) => {
  console.log("Data fetched:", data);
}); // Data fetched: { id: 1, name: "Furqan" }