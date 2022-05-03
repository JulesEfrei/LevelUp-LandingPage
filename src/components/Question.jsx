import React, { useState } from 'react'
import "../styles/FAQ.scss"

function Question({data}) {

    const [display, setDisplay] = useState("none")

    function toggle() {
        setDisplay(display == "none" ? "flex" : "none")
    }

  return (
    <div className="question">
        
        <div className="ask">
            <button onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
            </button>
            <h2>{data.question}</h2>
        </div>

        <div className="answer" style={{ display: display}}>
            <div className="icon">
                <p>👉🏻</p>
            </div>
            <div className="content">
                <p>{data.answer}</p>
            </div>
        </div>

    </div>
  )
}

export default Question