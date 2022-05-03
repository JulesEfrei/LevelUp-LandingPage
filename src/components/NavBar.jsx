import React from 'react'
import "../styles/navBar.scss"

function NavBar() {
  return (
    <nav>

        <div className="navbar">
            <div className="item">
                <a href="#">About Us</a>
            </div>
            <div className="item">
                <a href="#">Features</a>
            </div>
            <div className="item">
                <a href="#">Contact</a>
            </div>
            <div className="download">
                <a href="#">Download App</a>
            </div>
        </div>

        <div className="name">
            <h2>LevelUp</h2>
            <img src="./assets/logo.png" alt="Level Up logo" />
        </div>

    </nav>
  )
}

export default NavBar