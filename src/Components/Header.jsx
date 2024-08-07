import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="header" style={{borderBottom:"1px solid black"}}>
<h1 className="header-title">Movies Library</h1>
<nav className="header-nav">
  <Link className="nav-link" to="/">Home</Link>
  <Link className="nav-link" to="/login">Log In</Link>
</nav>
</header>
  )
}

export default Header
