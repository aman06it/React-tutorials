import React,{useState} from 'react'
import useCounter from '../Hooks/useCounter'

function CounterOne() {
    const [count, increment, decrement, reset] = useCounter(0)

  return (
    <div>
        <h1>Count - {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne