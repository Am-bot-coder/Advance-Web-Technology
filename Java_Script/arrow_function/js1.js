const add = function(n1,n2){
    console.log("addition of number is "+ (n1+n2))

}
add(10,20) //simple function

const sub = (n1,n2)=>{
    console.log("addition of number is "+ (n1-n2))

} //arrow function
sub(10,5)
//arrow functions are introduced in ES6

const fun = ()=>{
    console.log("Hello Everybody from parameterless arrow function")
}
fun()

const mult = (n1,n2)=>n1*n2
console.log("Multiplication : "+mult(10,20))

const sqr = n=>n*n
console.log("square = "+sqr(5))
