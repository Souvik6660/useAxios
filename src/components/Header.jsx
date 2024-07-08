import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
     <h1 style={{textAlign:'center', fontFamily:'revert'}}> <Link to={"/"}> React Image Gallery</Link> </h1>
    </div>
  )
}

export default Header
