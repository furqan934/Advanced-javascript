// new concept in ES 6 
// numbers = [1, 2, 3]
// First iteration:
// acc = 0, val = 1 → acc + val = 1
// Second iteration:
// acc = 1, val = 2 → acc + val = 3
// Third iteration:
// acc = 3, val = 3 → acc + val = 6
// Final result = 6

function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);// acc = 0  , val = fisrt parametrer,
}

console.log(sum(1, 3,9,9));     // 6



//old concept 
// function sum(){
//     console.log(arguments);
//     let sum = 0;
//     for(let i in arguments){
//         sum += arguments[i];
//         console.log(sum );
//     }
// }
// sum(2,3);
