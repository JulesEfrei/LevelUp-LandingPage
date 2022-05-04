import React, { useState } from 'react'
import "../styles/contact.scss"

function Form({title, form}) {

    const [display, setDisplay] = useState("none")
    const [arrow, setArrow] = useState(0)


    function toggle() {
        setDisplay(display === "none" ? "block" : "none")
        setArrow(arrow === 0 ? 90 : 0)
    }

    const rounded = {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: "1rem"
    }

    const square = {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginBottom: 0
    }

  return (
    <div className="formContainer">

            <div className="title" onClick={toggle} style={display === "none" ? rounded : square}>
                <h2>{title}</h2>
                <button onClick={toggle} style={{ transform: `rotate(${arrow}deg)` }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                </button>
            </div>

            <div className="form" style={{ display: display }}>
                <form method="post" name={`form-${form.id}`}>
                    <input type="hidden" name="form-name" value={`form-${form.id}`} />
                    {form.name.enable == true && ( <input type="text" name="name" id={`name${form.id}`} placeholder="Name" /> )}
                    {form.lastName.enable == true && ( <input type="text" name="lastName" id={`lastName${form.id}`} placeholder="Last Name" /> )}
                    {form.email.enable == true && ( <input type="email" name="email" id={`email${form.id}`} placeholder="E-mail" /> )}
                    {form.select.enable == true && ( 
                        <select name="appSelect" id={`appSelect${form.id}`}> 
                            <option value="app">LevelUp Application</option>
                            <option value="web">LevelUp Web Site</option>
                        </select>
                    )}
                    {form.message.enable == true && ( <textarea name={form.message.name} id={`text${form.id}`} cols="40" rows="7" placeholder={form.message.placeholder}></textarea> )}
                    <input type="submit" value="Submit Form" />
                </form>
            </div>

    </div>
  )
}

export default Form


/*

Witch form : 
  - Be informed
  - Beta tester
  - Request features
  - Report bug app
  

  Repport Bug => selector (App || Site) / message
  
  Beta Tester => Name / Last Name / Birthday / email / Why

  Request Features => Name / Email / message

  Be informed => Name / email


*/


/*

const form = {
    id: "bla",
    message: {
        enable: true,
        pla
    }
}


*/