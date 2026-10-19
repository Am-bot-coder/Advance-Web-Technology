import type Employee from "../interface/employee";

function EmployeeComponent(e1:Employee){
    

    return (
        <div>
            <h4 style={{color:"bisque",backgroundColor:"red"}}>Employee Details</h4>
            <p>Name: {e1.name}</p>
            <p>Salary: {e1.salary}</p>
            <hr />
        </div>
    )
}


export {EmployeeComponent}