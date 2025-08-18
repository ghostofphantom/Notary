import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light px-4">
        <Link className="navbar-brand fw-bold" href="#">Notary</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Testimonials</Link></li>
            {/* <li className="nav-item"><Link className="nav-link" to="#">About</Link></li> */}
            <li className="nav-item"><Link className="nav-link" to="#">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
