//arrrow fn with parameter 
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // 5

//arrrow fn with no parameter and single lne print
// const greet = () => console.log("my name is muhammad furqan");
//arrrow fn with no parameter and multiple line print
// const greet = ( )=> {
//     console.log("my name is muhammad furqan ");
//     console.log("my age is 21");
// };
// greet()

// ❗this Behavior Difference
// Arrow functions inherit this from their parent (outer) scope.
// Regular functions create their own this.
// const obj = {
//   name: "Ali",
//   greet: () => {
//     console.log(this.name); // ❌ undefined (arrow uses outer `this`, which is global)
//   }
// };
// obj.greet();

// coreect version of reguler functuion ehich havecreate there own  this 
const obj = {
  name: "Ali",
  greet(){
    console.log(this.name); // ❌ undefined (arrow uses outer `this`, which is global)
  }
};

obj.greet();