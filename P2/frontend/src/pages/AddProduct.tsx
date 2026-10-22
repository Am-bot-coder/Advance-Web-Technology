import React, { useState } from 'react'
import addProducts from '../service/productService'

function AddProduct() {
    const [name,setName] = useState("")
    const [price,setPrice] = useState(0)
  return (
    <div style={{backgroundColor:"red",width:700,padding:30}}>
        <h3><u>Add Products</u></h3>
      <label >Name: </label><input type="text"  onChange={e=>{setName(e.target.value)}}/>
      <hr />
      <label >Price: </label><input type="number"  onChange={e=>{setPrice(Number(e.target.value))}}/>
      <hr />

      <button style = {{height:22}} onClick={async()=>{
        try {
            const data = await addProducts(name,price)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
      }}>AddProduct</button>
    </div>
  )
}

export default AddProduct
