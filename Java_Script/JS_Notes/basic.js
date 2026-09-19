/*
Scope: let and const are block-scoped (limited to { } block)
or global-scoped, reducing errors compared to var.

var is a keyword in JavaScript used to declare variables 
and it is Function-scoped and hoisted, 
allowing redeclaration but can lead to unexpected bugs.

let is a keyword in JavaScript used to declare variables and
it is Block-scoped and not hoisted to the top, 
suitable for mutable variables

console.log(a)  //undefine
console.log(b)  //Reference Error
console.log(c)  //Reference Error

var a = 10
let b = 20
const c = 30 //let and const initaialization cant hoisted

var is a functional score 
let and const is a block scope

*/
 
//------------------------------------------------------------------>

/*

//function can be called using hoisting not a function variable

sayhello()
sayAmigo()
function sayhello(){
    console.log("Say hello")
}

sayAmigo= ()=>{
    console.log("Amigo")
}

sayAmigo= function(){
    console.log("Amigo")
}

*/

//->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Nullish Coalescing: ??

/*
it return the right value if left is null or undefined else return left value
*/


/* 
for loop same as c++
for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4
*/

//for in loop -->
/*
const person = { name: "Alice", age: 22, city: "Delhi" };
for(key in person){
    console.log(key +":" + person[key])
}

name:Alice
age:22
city:Delhi

--------------------------------------------------------------

arr = [10,20,30,40,50,60]
for(index in arr){
    console.log(index)
    console.log(arr[index])
    console.log("\n")
}

----------------------------------------------------------------
*/


/*

//for each loop-->
arr = [10,20,30,40,50,60]
arr.forEach((num)=>console.log(num*2))
//array.forEach(function(element, index, array)

*/

//---------------------------------------------------------------------


/*
While loop
i=0
while(i<10){
    console.log(i)
    i++
}

Do While loop
i=0
do{i++
    console.log(i)
}while(i<10)
*/






