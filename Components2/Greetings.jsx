import React from 'react'

const Greetings = () => {
    const timeOfDay=["morning","afternoon"];

  return (
    timeOfDay? <h1>Good Morning!!!</h1>: <h1>Good Afternoon!!!</h1>
  )
}

export default Greetings
