import React from 'react'

import { Link, Route, Routes } from 'react-router'
import SignIn from '../pages/SignIn'
import Signup from '../pages/Signup'
import Homepage from '../pages/Homepage'

function Navbar() {
  return (
    <div>
      <nav style={{backgroundColor:"Blue" , padding:20 }}>
        <Link to='/signup'><b><u>SignUp</u></b></Link>|
        <Link to='/signin'><b><u>SignIn</u></b></Link>
      </nav>

      <div>

      </div>

      <Routes>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/' element={<Homepage />}></Route>
      </Routes>
    </div>
  )
}

export default Navbar
