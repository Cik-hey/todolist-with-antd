import React from 'react'
import AboutImage from '../assets/about.jpg'
import '../assets/design.css'

function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <img className='images' src={AboutImage} />
    </div>
  )
}

export default AboutPage
