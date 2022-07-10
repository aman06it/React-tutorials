import React, {useState, useEffect} from 'react'
import HoockMouse from './HoockMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle display</button>
        {display && <HoockMouse/>}
    </div>
  )
}

export default MouseContainer