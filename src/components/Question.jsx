import React, { useState } from 'react'
import "../styles/FAQ.scss"

function Question({data}) {

    const [display, setDisplay] = useState("none")

    function toggle() {
        setDisplay(display == "none" ? "flex" : "none")
    }

    const rounded = {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    }

    const square = {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    }

  return (
    <div className="question">
        
        <div className="ask" onClick={toggle} style={display === "none" ? rounded : square}>
            <button onClick={toggle}>
                { display == "none" && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>}
                { display == "flex" && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/></svg> }
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