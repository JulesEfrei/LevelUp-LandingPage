import React from 'react'
import "../styles/FAQ.scss"

import Question from './Question'

function FAQ() {

  const faq = [
    {
      question : "How to get the application?",
      answer: "Sorry, at the moment LevelUp is in a test phase and is only available for certain users. Fill the form below to be informed about the release."
    },
    {
      question : "When is the application released?",
      answer: "For the moment no date has been announced. We are working hard to release the application as soon as possible. Stay patient, we are coming !  "
    },
    {
      question : "Can they be part of the beta-testers?",
      answer: "We are always listening to your feedback. You can request access to the Beta by filling out the form below."
    },
    // {
    //   question : "Can they be part of the beta-testers ?",
    //   answer: "We are always listening to your feedback. You can request access to the Beta by filling out the form below"
    // },
    // {
    //   question : "Can they be part of the beta-testers ?",
    //   answer: "We are always listening to your feedback. You can request access to the Beta by filling out the form below"
    // },
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