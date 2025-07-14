//spread oprater in array 
const arr1 = [1,2];
const arr2 = [3,4];
const merge = [...arr1,...arr2]
console.log("🚀 ~ merge:", merge)


//spread oprater in object

const object01 = 
{
    name: "furqan"
}
const object02 = 
{
    ...object01,
    age: 20
}
console.log(object02);