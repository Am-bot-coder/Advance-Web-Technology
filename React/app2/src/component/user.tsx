import type User from "../interface/userInterface";

function UserComponent() {
    const u1 : User ={
        id:22121036,
        name:"Ayush Mahadik",
        mobile:"8468864677"
    }

    return (
        <div>
            <h4 style={{color:"bisque" ,backgroundColor:"red"}}>User Details</h4>
            <p>Id : {u1.id}</p>
            <p>Name : {u1.name}</p>
            <p>Mobile : {u1.mobile}</p>
        </div>
        
    )
}

export default UserComponent