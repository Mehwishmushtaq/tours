import React from 'react'
import loader from './loader.gif'

const Loader = () => {
  return (
    //<h1>loading...</h1>
    <div style={{display: 'flex', justifyContent: 'center' }}>
      <img src={loader} alt="spinner" />
    </div>
  )
}

export default Loader