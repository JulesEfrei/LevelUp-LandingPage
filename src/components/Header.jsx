import React from 'react'

import "../styles/header.scss"

import NavBar from "./NavBar"



function Header() {
  return (
    <header id="header">

        <div className="box"></div>
        <div className="topCircle">
          <img src="./assets/Groupcircle.svg" alt="Circle SVG" />
        </div>

        <NavBar />

        <div className="container">

            <div className="text">
                <h1>LevelUp your <span>skills</span></h1>
                <p>Boost your productivity, improve your skills and stay motivated with your activity tracker. LevelUp tracks all your activities and shows you your progress and where you lose time in a day to improve you.</p>
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