import { useState } from "react"




export default function Signin() {

const [email,setemail] = useState("")
const [pass,setpass] = useState("")

const onClk = ()=>{
    window.alert("email = "+email+"\n"+"Password = "+pass)
}

  return (
    <div style={{backgroundColor:"red",width:300,margin:20,padding:30}}>
      <label >Email : </label>
      <input type="email" placeholder="...@gmail.com" onChange={(e)=>{setemail(e.target.value)}}/>
      <hr />
      <label >Password:</label>
      <input type="password" placeholder="*******" onChange={(e)=>{setpass(e.target.value)}}/>
      <hr />
      <button style={{width:50,height:20}} onClick={onClk}>SignIn</button>
      <p>click here to signup</p>
    </div>
  )
}


