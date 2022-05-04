import React from 'react'
import "../styles/footer.scss"

function Footer() {
  return (
    <footer id="footer">


      <div className="top">
        <div className="year">
          <h1>2022</h1>
        </div>
        <div className="location">
          <h1>Paris, France</h1>
        </div>
      </div>

      <div className="bottom">
        <div className="informationContainer">
          <div className="contact">
            <p className="infoTitle">Get In Touch</p>
            <p>support@levelup.com <span>(Fictice E-mail)</span></p>
            <p>business@levelup.com <span>(Fictice E-mail)</span></p>
          </div>
          <div className="menu">
            <p className="infoTitle">Menu</p>
            <div>
              <a href="#header">Home</a>
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#faq">FAQ's</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="connect">
            <p className="infoTitle">Connect</p>
            <a href="#">LinkedIn <span>(Fictice link)</span></a>
            <a href="#">GitHub <span>(Fictice link)</span></a>
            <a href="#">Instagram <span>(Fictice link)</span></a>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2022</p>
        </div>
      </div>


    </footer>
  )
}

export default Footer