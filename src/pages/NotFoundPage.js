import React from 'react'
import notFoundImage from '../assets/404.jpg'
import '../assets/design.css'

function NotFoundPage() {
  return (
    <div>
        <h1>Page Not Found</h1>
      <img className='images' src={notFoundImage} />
    </div>
  )
}

export default NotFoundPage;