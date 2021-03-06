import React from 'react'

import "../styles/header.scss"

import NavBar from "./NavBar"
import { ToastContainer, toast } from 'react-toastify';



function Header() {
  return (
    <header id="header">

        <div className="box"></div>

        <NavBar />


        <div className="topCircle">
          <img src="./assets/Groupcircle.svg" alt="Circle SVG" />
        </div>


        <div className="container">

            <div className="text">
                <h1>LevelUp your <span>skills</span></h1>
                <p>Boost your productivity, improve your skills and stay motivated with your activity tracker. LevelUp tracks all your activities and shows you your progress and where you lose time in a day to improve you.</p>
            </div>

            <div className="imgContainer">
                <img src="./assets/cate.png" alt="Image of the application" />
                <img src="./assets/main.png" alt="Image of the application" />
                <img src="./assets/add.png" alt="Image of the application" />
            </div>

        </div>

        <ToastContainer />

    </header>
  )
}

export default Header