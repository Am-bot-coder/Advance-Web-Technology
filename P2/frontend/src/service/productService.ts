import axios from "axios"

export default function addProducts(name,price){

    const URL = "http://localhost:4000/product/add"
    const body  ={name,price}
    return axios.post(URL,body)

    
}

