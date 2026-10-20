import { useState } from "react"
import { UserServices } from "../Services/userServices"


function Login() {

  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  const handleClick = async()=>{
    console.log(email)
    console.log(password)
    try {
      console.log("Try Block")
      const result = await UserServices(email,password)
    console.log(result.data) 
    } catch (error) {
      console.log("Catch Block")
      console.log(error)
    }     
  }

  return (
    <div>
      
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 bg-blue-400">
  <legend className="fieldset-legend">Login</legend>

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" onChange={e=>setEmail(e.target.value)} />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" onChange={e=>setPassword(e.target.value)} />

  <button className="btn btn-neutral mt-4" onClick={handleClick}>Login</button>
</fieldset>

    </div>
  )
}

export default Login
