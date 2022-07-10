import React, {useState, useMemo} from 'react'

function Counter() {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const incrementOne = () =>{
        setCounter1(counter1+1)
    }
    const incrementTwo = () =>{
        setCounter2(counter2+1)
    }
    
    const isEven2 = useMemo(()=>{
        let i=0;
        while(i<2000000000) i++
        return counter1%2 === 0
    },[counter1])

    const isEven = () => {
        let i=0;
        while(i<2000000000) i++
        return counter1%2 === 0
    }

  return (
    <div>
        <div>
            <button onClick={incrementOne}>Count one - {counter1}</button>
            {isEven2?'Even':'odd'}
        </div>
        <div>
            <button onClick={incrementTwo}>Count two - {counter2}</button>
        </div>
    </div>
  )
}

export default Counter