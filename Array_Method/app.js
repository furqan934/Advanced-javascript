// array method used in aaddvanced javascript
// foreach ,map, filter, reduce, find, some, every, sort, and more
// Example of using Array methods in JavaScript
const numbers = [1, 2, 3, 4, 5];
// Using forEach to iterate over the array
numbers.forEach((i) => {
  console.log(i); // 1, 2, 3, 4, 5
});
// Using map to create a new array with each element squared
const squaredNumbers = numbers.map((i) => i * i);   
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
// Using filter to create a new array with only even numbers this method is used when check the condition
const evenNumbers = numbers.filter((i) => i % 2 === 0);
console.log(evenNumbers); // [2, 4]
// Using reduce to calculate the sum of all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15
// Using find to get the first element that is greater than 3
const firstGreaterThanThree = numbers.find((i) => i > 3);   
console.log(firstGreaterThanThree); // 4
// Using some to check if there is any number greater than 4
const hasGreaterThanFour = numbers.some((i) => i > 4);
console.log(hasGreaterThanFour); // true
// Using every to check if all numbers are less than 6
const allLessThanSix = numbers.every((i) => i < 6); 
console.log(allLessThanSix); // true
// Using sort to sort the array in descending order
const sortedNumbers = numbers.sort((a, b) => a - b); 
console.log(sortedNumbers); // [5, 4, 3, 2, 1]
// Using reverse to reverse the order of the array
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // [5, 4, 3, 2, 1]
// Using includes to check if the array contains the number 3
const containsThree = numbers.includes(3);
console.log(containsThree); // true
// Using indexOf to find the index of the number 2
const indexOfTwo = numbers.indexOf(2);
console.log(indexOfTwo); // 1
// Using join to create a string from the array elements
const joinedNumbers = numbers.join(', ');
console.log(joinedNumbers); // "1, 2, 3, 4, 5"
// Using slice to get a subarray from index 1 to 3 (exclusive)
const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); // [2, 3, 4]
// Using splice to remove the first two elements from the array
const splicedNumbers = numbers.splice(0, 2);
console.log(splicedNumbers); // [1, 2]
console.log(numbers); // [3, 4, 5] (original array is modified
