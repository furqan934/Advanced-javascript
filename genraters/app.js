// genarater
//basic genarater
// function* genarater() {
//   yield 1;
//   yield 2;
// }   
// const genarate = genarater();
// console.log(genarate.next()); // { value: 1, done: false }
// console.log(genarate.next()); // { value: 2, done: false }  
// console.log(genarate.next()); // { value: undefined, done: true }

// // loop with genarater
// function* loopGenarater() {
//   for (let i = 0; i <= 5; i++) {
//     yield i;
//   }
// }
// const counter  = loopGenarater();
// for (let value of counter) {
//   console.log(value); // 0, 1, 2, 3, 4
// }

// real life use case 
function* loadPages(totalPages) {
  for (let page = 1; page <= totalPages; page++) {
    yield `loading Page ${page}`;
  }
}
const pages = loadPages(5);
for ( let page of pages){
console.log(page); // loading Page 1, loading Page 2, loading Page 3, loading Page 4, loading Page 5
}

