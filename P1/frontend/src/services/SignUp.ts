import axios from "axios"




export default function SUp(name,email,mobile,pass){

    const URL = "http://localhost:4000/user/signup"
    const body = {name,email,mobile,pass}
    
    return axios.post(URL,body)
}