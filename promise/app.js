//  Promises in JavaScript :- 
//  Promises are used to handle asynchronous operations in JavaScript.
//  They represent a value that may be available now, or in the future, or never
//  A promise can be in one of three states: pending, fulfilled, or rejected.
//  A promise is created using the Promise constructor, which takes a function with two parameters: resolve and reject.
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulating success or failure
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});
//  You can handle the result of a promise using the then() and catch() methods.
myPromise
   .then((result) => {
   console.log(result); // Output: Operation was successful! 
   })
   .catch((error) => {
   console.error(error); // Output: Operation failed.
   });

   // real life example of promise
    // Real-World Analogy:
// Imagine you're ordering food (asynchronous).
// You place the order → This is calling the function.
// You wait for delivery (2 sec) → This is the Promise delay.
// If everything goes right → You get food (resolve).
// If not → You get an error (reject).

function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const data = { id: 1, name: "Furqan" }; // Simulated data
        if (url) {
            resolve(data);
        } else {
            reject("Invalid URL");
        }
        }, 2000); // Simulating network delay
    });
    }
// fetchData("https://api.example.com/data")
//     .then((data) => {   
//         console.log("Data fetched:", data); // Output: Data fetched: { id: 1, name: "Furqan" }
//     })
//     .catch((error) => {
//         console.error("Error fetching data:", error); // Output: Error fetching data: Invalid URL
//     } );

// async / await
// You can write the same logic in a cleaner, more synchronous-looking way using async and await.
async function getData() {
  try {
    const data = await fetchData("https://api.example.com/data");
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();