import React from 'react'

const handleChange = () =>{
    console.log('Entering password...')
}

function Keypad() {
  return (
      <div>
    <input type = "password" onChange={handleChange}></input>
    </div>
  )
}

export default Keypad