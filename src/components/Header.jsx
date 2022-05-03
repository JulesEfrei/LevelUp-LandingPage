import React from 'react'

import "../styles/header.scss"

import NavBar from "./NavBar"



function Header() {
  return (
    <header>

        <div className="box"></div>

        <NavBar />

        <div className="container">

            <div className="text">
                <h1>LevelUp your skills</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nobis illo aliquid tempora consequuntur placeat perspiciatis porro velit qui. Eos!</p>
            </div>

            <div className="imgContainer">
                <img src="./assets/iphone.png" alt="Image of the application" />
                <img src="./assets/iphone.png" alt="Image of the application" />
                <img src="./assets/iphone.png" alt="Image of the application" />
            </div>

        </div>

    </header>
  )
}

export default Header