import React from 'react'

export default function () {
    function clickHandler(){
        console.log('button clicked')
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}
