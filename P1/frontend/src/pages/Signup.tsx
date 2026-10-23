import React, { useState } from 'react'
import SUp from '../services/SignUp'
import { Link, useNavigate } from 'react-router'


function Signup() {

    const[name,setname] = useState("")
    const[email,setemail] = useState("")
    const[mobile,setmobile] = useState("")
    const[pass,setpass] = useState("")
    const navigate = useNavigate()

  return (
    <div style={{width:700,backgroundColor:"red",padding:50}}>
        <label >Name : </label>
        <input type="text" placeholder='Your Name' onChange={e=>{setname(e.target.value)}}/>
        <hr />
        <label >Email : </label>
        <input type="email" placeholder='Your Email' onChange={e=>{setemail(e.target.value)}}/>
        <hr />
        <label >Mobile : </label>
        <input type="text" placeholder='Your Number' onChange={e=>{setmobile(e.target.value)}}/>
        <hr />
        <label >pass : </label>
        <input type="password" placeholder='**********' onChange={e=>{setpass(e.target.value)}}/>
        <hr />

        <button onClick={async()=>{
            const response = await SUp(name,email,mobile,pass)
            const result = response.data

            if(result.status == "Success"){
              window.alert("User added")
              navigate('/signin')
            }
        }}>SignUp</button>
      
    </div>
  )
}

export default Signup
