import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div style = {{backgroundColor:"blue", padding:10}}>
        <nav>
        <Link to = '/add'>Add Product</Link>
        <Link to = '/'>Show Product</Link>
        </nav>
    </div>
  )
}

export default Navbar
