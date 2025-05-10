// destruncturing
//  Array Destructuring:
// Array destructuring allows you to extract values from an array and assign them to variables.

const numbers = [1,2,3,4,["a","b"]];
// by writing double commas (,,) we skip the element of array 
const [firstValue,secendValue ,,,[nested_1,nested_2]] = numbers;// now i extrat the nsted value nd skip 2,3,index.
// console.log( firstValue);
// console.log( secendValue);
// // console.log( thirdValue);
// console.log( nested_1)
// console.log( nested_2)

// declare and assign vlaue in detructuring .
const arr = [5,6];
const[a,b, c = 7] = arr;
// first it will print the exsisting index value if not present index then it set default value .
console.log("\n" , a ,"\n" ,b ,"\n",c) 

// object destructring
const person = {
    name: "furqan",
    age: 21,
    address: {
        city: "peshawer",
        state: "kpk",
    }
};
// printing all prprotuies
// const {name,age ,address} = person;
// console.log('name: ',name);
// console.log("age:", age)
// console.log("address:", address)

// leaving age :
// const {name,address} = person;
// console.log('name: ',name);
// console.log("address:", address)

// asignig value to declare prprorties :

// leaving age :
// const {name,age,address,email = "furqanmf234@email.com"} = person;
// console.log('name: ',name);
// console.log("age:", age);
// console.log("address:", address);
// console.log("email:", email);


// remove undefined 
//address :{ city,state} ={city:"karach" , state:"sindh"}  default value 
const {name,age,address :{ city,state} ={city:"karach" , state:"sindh"} } = person;
console.log('name: ',name);
console.log("age:", age);
// console.log("address:", address);
console.log("🚀 ~ city:", city)
console.log("🚀 ~ state:", state)
