import React from 'react'
import HelpImage from '../assets/help.jpg'
import '../assets/design.css'

function HelpPage() {
  return (
    <div>
      <h1>Help Page</h1>
      <img className='images' src={HelpImage} />
    </div>
  )
}

export default HelpPage