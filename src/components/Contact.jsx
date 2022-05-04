import React from 'react'
import Form from "./Form"
import "../styles/contact.scss"

function Contact() {
  return (
    <section id="contact">

      <div className="circleSvg">
        <img src="./assets/Groupcircle.svg" alt="" />
      </div>


      <div className="top">
        <h1>Contact Us</h1>
      </div>

      <div className="bottom">

        <div className="Title">
          <h2>Tell us what's your situation</h2>
        </div>

        <div className="listContainer">


          {/* Be Informed Form */}
          <Form title="Be informed" form={{
            id: "Info",
            name: { enable: true },
            lastName: { enable: false },
            email: { enable: true },
            select: { enable: false },
            message: { enable: false, placeholder: "Message" },
          }}/>

          {/* Beta-Tester Form */}
          <Form title="Want to became a Beta-Tester" form={{
            id: "Beta",
            name: { enable: true },
            lastName: { enable: true },
            email: { enable: true },
            select: { enable: false },
            message: { enable: true, name: "beta", placeholder: "Why ?" },
          }}/>

          {/* New Features Form */}
          <Form title="Want a new feature" form={{
            id: "NF",
            name: { enable: true },
            lastName: { enable: false },
            email: { enable: true },
            select: { enable: false },
            message: { enable: true, name: "features", placeholder: "Message..." },
          }}/>

          {/* Report Bug Form */}
          <Form title="Report Bug" form={{
            id: "Bug",
            name: { enable: true },
            lastName: { enable: false },
            email: { enable: true },
            select: { enable: true },
            message: { enable: true, name: "bug", placeholder: "There is a bug with..." },
          }}/>

        </div>

      </div>


    </section>
  )
}

export default Contact


/*

Witch form : 
  - Report bug app
  - Beta tester
  - Request features
  - Be informed
  

  Repport Bug => selector (App || Site) / message
  
  Beta Tester => Name / Last Name / Birthday / email / Why

  Request Features => Name / Email / message

  Be informed => Name / email


*/