import type Employee from "../interface/employee";

function EmployeeComponent(){
    const e1 :Employee = {
        name: "Ayush",
        salary: 100000,
    }

    return (
        <div>
            <h4 style={{color:"bisque",backgroundColor:"red"}}>Employee Details</h4>
            <p>Name: {e1.name}</p>
            <p>Salary: {e1.salary}</p>
        </div>
    )
}


export {EmployeeComponent}