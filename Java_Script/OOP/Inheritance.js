class Person{
    constructor(name=" ",age=0){
        this.pname = name
        this.age = age
    }
    displayPerson(){
        console.log("Name : "+ this.pname)
        console.log("Age :"+ this.age)
    }
}

class Employee extends Person{
    constructor(name=" ",age=0,salary=0){
        super(name,age);
        this.salary = salary
    }
    displayEmployee(){
        this.displayPerson()
        console.log("Salary :"+ this.salary)
    }
}

e1 = new Employee("Ayush",22,10000)
e1.displayPerson()
console.log("================================")
e1.displayEmployee()