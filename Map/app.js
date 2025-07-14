//map s a key-value collection like an objects but it have unique keys and can use any data type as a key2 and maintain insertion order and also itrable aand have methods like set, get, has, delete, clear, size
const useMap = new Map();
useMap.set('name', 'Furqan');
useMap.set('age', 20);
useMap.set('isStudent', true);
useMap.set('courses', ['JavaScript', 'Python']);
useMap.set('address', { city: 'Karachi', country: 'Pakistan' });
useMap.set('greet', function() {
 console.log(`Hello, my name is ${this.name}`); // using template literals
});
// console.log(useMap.get('name')); // Furqan
// console.log(useMap.get('age')); // 20
// console.log(useMap.get('isStudent')); // true
// console.log(useMap.get('courses')); // ['JavaScript', 'Python']
// console.log(useMap.get('address').city); // Karachi
// useMap.get('greet')(); // Hello, my name is Furqan 
// console.log(useMap.get('name')); // true


// looping the map 
for (const [key, value] of useMap) {
  console.log(`${key}: ${value}`);
}