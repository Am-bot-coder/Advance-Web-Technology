//object has properties(variable) and method(functions)

//Note:
//for a constructor function The function name should br always capital

function Person(name="",age=0){

    //Note there is no arrow function there is a . functions
    this.name = name,
    this.age=age
}

p1 = new Person()
p2 = new Person('Ayush',22)

console.log(p1)
console.log(p2)