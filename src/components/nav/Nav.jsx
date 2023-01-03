// type rfce for boilerplate simple setup
// rfce -> root functional component export
import React from 'react'
import "./Nav.css"

function Nav() {
  return (
    <div className='navbar'>
        <a href="/" className="nav-link">about</a>
        <a href="/" className="nav-link">pricing</a>
        <a href="/" className="nav-link">contact</a>
    </div>
  )
}

export default Nav