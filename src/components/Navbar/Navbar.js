import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  return (
    <nav className="container navbar">
      <Link to="/">
        <div className="logo">
        <i className="fab fa-affiliatetheme"></i> <h2>Onboarding</h2>
        </div>
      </Link>
      <div className="menu">
        <ul className="menu-items">
          <Link to="/">
            <li className="menu-item">
              <i className="fas fa-search"></i>
            </li>
          </Link>
          <Link to="/">
            <li className="menu-item">
              <i className="fas fa-adjust"></i>
            </li>
          </Link>
          <Link to="/">
            {' '}
            <li className="menu-item">
              <i className="far fa-envelope"></i>
            </li>
          </Link>

          <Link to="/">
            <li className="menu-item">
              <i className="far fa-user"></i>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
