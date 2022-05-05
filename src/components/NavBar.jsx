import React, { useState, useEffect } from 'react'
import "../styles/navBar.scss"

function NavBar() {

    const [rotate, setRotate] = useState(180)
    const [display, setDisplay] = useState("none")
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })

    // On mobile screen => toggle the visibility of the menu
    function toggle() {
        setRotate(rotate == 0 ? 180 : 0)
        setDisplay(display == "flex" ? "none" : "flex")
    }

    
    
    // Will trigger the resizing of the screen and re-render the component because of the updated state to reapply the display condition on the container
    useEffect(() => {
        function handleResize() {
            setDimensions({
              height: window.innerHeight,
              width: window.innerWidth
            })
        }

        window.addEventListener('resize', handleResize)

    }, [])
    

  return (
    <nav>

        <div className="navbar" style={{ display: window.innerWidth < 750 ? display : "flex" }}> 
            <div className="item">
                <a href="#about">About</a>
            </div>
            <div className="item">
                <a href="#features">Features</a>
            </div>
            <div className="item">
                <a href="#contact">Contact</a> 
            </div>
            <div className="download">
                <a href="#">Download App</a>
            </div>
        </div>

        <div className="name">
            <h2>LevelUp</h2>
            <img src="./assets/logo.png" alt="Level Up logo" />
        </div>

        <div className="arrow">
            <button style={{ transform: `rotate(${rotate}deg)` }} onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"/></svg>    
            </button>
        </div>

    </nav>
  )
}

export default NavBar