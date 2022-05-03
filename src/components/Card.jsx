import React from 'react'
import "../styles/features.scss"

function Card({data}) {
  return (
    <div className="cardContainer">

        <h2>{data.title}</h2>

        <p>{data.text}</p>

    </div>
  )
}

export default Card