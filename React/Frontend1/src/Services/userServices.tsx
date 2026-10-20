import axios from "axios"
import { BASE_URL } from "../Utils/config"



function UserServices(email:string,password:string) {
    const URL = BASE_URL+"/user"+"/signin"
    console.log(URL)

    const body = {email,password}
    return axios.post(URL,body)
}

export {UserServices}
