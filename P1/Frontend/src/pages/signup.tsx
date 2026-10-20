import { useState } from "react"

function Signup() {
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [mobile,setmobile] = useState("")
    const [pass,setpass] = useState("")
    
    const onClk = ()=>{
        window.alert("email = "+email+"\n"+"Password = "+pass)
    }
  return (
    <div style={{backgroundColor:"red",width:300,margin:20,padding:30}}>
      <label >Name : </label>
      <input type="text" placeholder="Am bot coder" onChange={(e)=>{setname(e.target.value)}}/>
      <hr />
      <label >Email : </label>
      <input type="email" placeholder="...@gmail.com" onChange={(e)=>{setemail(e.target.value)}}/>
      <hr />
      <label >Mobile : </label>
      <input type="tel" placeholder="91" onChange={(e)=>{setmobile(e.target.value)}}/>
      <hr />
      <label >Password:</label>
      <input type="password" placeholder="*******" onChange={(e)=>{setpass(e.target.value)}}/>
      <hr />
      <button style={{width:50,height:20}} onClick={onClk}>SignIn</button>
    </div>
  )
}

export default Signup
