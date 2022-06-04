import React from 'react'

import '../styles/error.css'

const Error = ({ message }) => {
  const handleReload = () => location.reload()

  return (
    <div className='error__page'>
      <h1>{message}</h1>
      <button type='button' onClick={handleReload}>
        Reload
      </button>
    </div>
  )
}

export default Error