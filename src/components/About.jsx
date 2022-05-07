import React from 'react'

import "../styles/about.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function About() {

  function popup() {
    toast.info('Please, complete the Beta-Tester Form', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
  }


  return (
    <section id="about">

      <div className="squareSvg">
        <img src="./assets/square.svg" alt="Square SVG" />
      </div>


      <div className="top">
        <h1>About LevelUp</h1>
      </div>

      <div className="bottom">

        <div className="left">
          <img src="./assets/iphone.png" alt="Screen of the application" />
          <div className="box"></div>
        </div>

        <div className="right">
          <h2>Track your activities and improve your skills</h2>
          <p>
          LevelUp's goal is to improve you. It's ambitious but we rely on all your feedback and needs to make it possible.
          Staying motivated and productive is quite complicated, we often get distracted or waste time on things that don't
          deserve it. The same is true for longer periods of time with other problems like staying motivated when our goal is
          far from being reached. Our goal is to increase your productivity by tracking every single activity you perform to
          help you identify areas for improvement. But LevelUp does not stop here, you can define your goals directly in the
          application and follow your progress to reach your goals whatever they are.
          </p>
          <a href="#contact" onClick={() => popup()}>Download LevelUp</a>
        </div>

      </div>

      <ToastContainer />


    </section>
  )
}