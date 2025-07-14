// var : globaly scope 
// let $ const : block scope   ES-6
// var x = "hi"
// var x = "hello"
// x = "world";
// console.log(x);

// const x = "hi"
// var x = "hello" // const are not reinitialize 
// x = "world";  // const are not reassigned
// console.log(x);

let  x = "hi"
// let x = "hello" // const are not reinitialize 
// x = "world";  // const are  reassigned
console.log(x);


function testScope(){
    var  x = 3;
    let  y = 5;
    const  z = 7;
    if (true){
        x = 300;
        let y = 500;
        console.log(x ,"\n" , y);
    }
    console.log(x ,"\n", y ,"\n" , z);
}
testScope();