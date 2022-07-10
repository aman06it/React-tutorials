import React, {useState, useEffect} from 'react'

export default function HoockCounterTwo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(()=>{
        console.log('Updateing document title')
        document.title = `Clicked ${count} times`
    },[count])
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=>setCount(count+1)}>Clicke {count} times</button>
    </div>
  )
}
