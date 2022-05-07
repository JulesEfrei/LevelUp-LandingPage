import React from 'react'
import "../styles/features.scss"

import Card from "./Card"

function Features() {

  const features = [
    {
      title: "Track your activities",
      text: "Add all the things you do during the day by putting them into categories and associate their time. Consult all your activities and observe the time you spend on them."
    },
    {
      title: "Take a break feature",
      text: "You work too long and are not sufficiently concentrated? LevelUp sends you a notification every 2 hours to take a break. Practical, isn't it?"
    },
    {
      title: "Level system",
      extra: "Upcoming features",
      text: "With a level system like the one found in video games, set goals to motivate yourself and increase your skills."
    },
    {
      title: "Report of your activities",
      extra: "Upcoming features",
      text: "Whenever you want you can find a detailed report of your last activities in the form of graphs in order to identify the moments when you drop in productivity."
    },
  ]



  return (
    <section id="features">

      <div className="plusSvg">
        <img src="./assets/plus.svg" alt="" />
      </div>

      <div className="top">
        <h1>Features</h1>
        <p>
        LevelUp combines several applications in one thanks to its many features, both current and future.
        Here are some of them. You can also propose your own features in the form below. We are listening
        to you!
        </p>
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