function outer(){
    let count = 0;
    return {
    increment:  function(){
        count ++;
        console.log("++ -> count:", count)
    },
    decrement:  function(){
        count --;
        console.log("-- -> count:", count)
    },
    getCount:  function(){
        return count ;
    }
};
}
const count = outer();
count.increment();
count.increment();
count.decrement();
// console.log(outer.getCount);

// default parameter
//A default parameter allows you to set a default value for a function parameter. If no value is passed for that parameter when the function is called, the default value is used.

// function greet(name = "Guest") {
//   console.log("Hello, " + name);
// }
// const greet = (name = "guest")=> console.log("hi",name);

// greet("Furqan"); // Hello, Furqan
// greet();         // Hello, Guest (uses default value)

// const greet = ([a,b,c] = [1,2,3])=> console.log("\n" , a ,"\n" ,b ,"\n",c);
// greet([4,5,6]);
// greet();

// default paarameter and objects destructure 
const greet = ({fullname,age} = {fullname:"name" , age: 0},a,b,c)=> console.log("name: ",fullname,", age: ",age,a,b,c);
greet({fullname:"muhammad furqan" , age: 22});
greet();

// 1st click = green
//2nd click = red.
// onclick 
