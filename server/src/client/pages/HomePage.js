import React from 'react'

const HomePage = () => {
  return (
  <div>
    <div>I'm the home components</div>
    <button onClick={() => console.log('Hi there')}>Press me!</button>
  </div>
  )
}

export default {
  component: HomePage
}