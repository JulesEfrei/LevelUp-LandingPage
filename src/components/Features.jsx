import React from 'react'
import "../styles/features.scss"

import Card from "./Card"

function Features() {

  const features = [
    {
      title: "jsp",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, error sit! Dolores nobis unde labore suscipit deleniti quia obcaecati cum, repellat doloribus beatae iure dolorem. Error expedita reprehenderit asperiores aspernatur!"
    },
    {
      title: "zouhf",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, error sit! Dolores nobis unde labore suscipit deleniti quia obcaecati cum, repellat doloribus beatae iure dolorem. Error expedita reprehenderit asperiores aspernatur!"
    },
    {
      title: "ijzdf",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, error sit! Dolores nobis unde labore suscipit deleniti quia obcaecati cum, repellat doloribus beatae iure dolorem. Error expedita reprehenderit asperiores aspernatur!"
    },
    {
      title: "fea",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, error sit! Dolores nobis unde labore suscipit deleniti quia obcaecati cum, repellat doloribus beatae iure dolorem. Error expedita reprehenderit asperiores aspernatur!"
    },
  ]



  return (
    <section id="features">


      <div className="top">
        <h1>Features</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, error sit! Dolores nobis unde labore suscipit deleniti quia obcaecati cum, repellat doloribus beatae iure dolorem. Error expedita reprehenderit asperiores aspernatur!</p>
      </div>

      <div className="bottom">

        {features.map(elm => (
          <Card data={elm} />
        ))}

      </div>

    </section>
  )
}

export default Features