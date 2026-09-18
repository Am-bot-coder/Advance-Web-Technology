function add(num1,num2){
    console.log("sum is "+ (num1+num2))
}
const addition = add
// we can assign an function to a variable 
//called as alias

add(10,20)
addition(40,50)

//function are internally objects

//variable stores the address of function