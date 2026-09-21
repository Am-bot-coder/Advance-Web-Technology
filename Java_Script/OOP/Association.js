// Explore the class syntax and perform associatation and inheritance with example

class Date{
    
    constructor(day=0,month=0,year=0){
        this.day = day
        this.month = month
        this.year = year
    }
    DisplayDate(){
        console.log(`${this.day}/${this.month}/${this.year}`)
    }
}

class Employee{
    constructor(name="",salary=0){
        this.name = name
        this.salary = salary
        this.jdate = new Date()
    }

    setDate(){
        
        this.jdate.day = prompt("Enter the day")
        this.jdate.month = prompt("Enter the Month")
        this.jdate.year = prompt("Year")
    }

    DisplayEmployee(){
        console.log("Name: "+this.name)
        console.log("Salary: "+this.salary)
        this.jdate.DisplayDate()       

    }

}

emp = new Employee("Ayush",10000)
emp.DisplayEmployee()
emp.setDate()
emp.DisplayEmployee()