import React from 'react'

const Menu = (props) => {
  return (
    <div className='menu--container'>
      <h1 className='menu--title'>QUIZZICAL</h1>
      <p className='menu--caption'>Test your knowledge now</p>
      <button className='menu--button' onClick = {() => props.start()}>Start Quiz</button>
    </div>
  )
}

export default Menu
