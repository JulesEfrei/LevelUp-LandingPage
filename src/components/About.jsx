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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum harum dolore obcaecati dolores quo, voluptatum odit magnam voluptatem repellendus temporibus voluptate est, accusamus exercitationem eveniet? Velit culpa, ea est asperiores ratione libero error nemo, assumenda laborum totam, illum quasi. Laudantium ullam minima nam aliquam est similique, earum dignissimos repellendus ducimus, debitis soluta fugit quam fugiat velit dicta harum recusandae nesciunt beatae blanditiis, commodi deserunt iste ab ratione quaerat? Ea eligendi cumque aliquam molestiae sit suscipit, vero, distinctio error illo sequi exercitationem reprehenderit libero, ad modi omnis. Laudantium, eos beatae repellat asperiores commodi, sapiente architecto sint ut perferendis soluta recusandae!</p>
          <a href="#contact" onClick={() => popup()}>Download LevelUp</a>
        </div>

      </div>

      <ToastContainer />


    </section>
  )
}