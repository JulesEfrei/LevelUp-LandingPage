import React from 'react'
import "../styles/features.scss"

function Card({data}) {
  return (
    <div className="cardContainer">

        <div className="content">
          <h2 className="title">{data.title}</h2>
          {data.extra && <h2 className="extra">({data.extra})</h2>}
        </div>

        <p>{data.text}</p>

    </div>
  )
}

export default Card