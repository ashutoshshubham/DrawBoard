import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <Link className="navbar-brand mt-2 mt-lg-0" to="#">
              <img
                src="https://cdn.dribbble.com/users/21207/screenshots/1309224/media/b134bad55a95c664102b7fab87ac5a0f.png?compress=1&resize=400x300"
                height={40}
                alt="MDB Logo"
                loading="lazy"
              />
            </Link>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  SignUp
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login2">
                  Login
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/board2">
                  Drawboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/board3">
                  Drawboard3
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/board4">
                  Drawboard4
                </NavLink>
              </li>
            </ul>
            {/* Left links */}
          </div>
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>

  )
}

export default NavBar;