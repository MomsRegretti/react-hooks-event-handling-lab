import React from 'react'


const blurHandler = () => console.log('Hey! Eyes on me!');
const focusHandler = () => console.log('Good!')

function EyesOnMe() {
  return (
    <div>
        <button onFocus={focusHandler} onBlur={blurHandler}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe