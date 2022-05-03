import React from 'react'
import "../styles/FAQ.scss"

import Question from './Question'

function FAQ() {

  const faq = [
    {
      question : "How to Download the application ?",
      answer: "The application is not already releaseThe application is not"
    },
    {
      question : "How to Download the application ?",
      answer: "The application is not already releaseThe application is not"
    },
    {
      question : "How to Download the application ?",
      answer: "The application is not already releaseThe application is not"
    },
  ]

  return (
    
    <section id="faq">

      <div className="top">
        <h1>FAQ's</h1>
      </div>

      <div className="bottom">

        {faq.map(elm => (
          <Question data={elm} />
        ))}

      </div>

    </section>

  )
}

export default FAQ