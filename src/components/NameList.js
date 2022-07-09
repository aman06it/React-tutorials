import React from 'react'

function NameList() {
    const name = ['Aman', 'Atul', 'Amit']
  return (
    <div>
        {
            name.map((name, i)=>{
                return <h2 key={name}>{name}</h2>
            })
        }
    </div>
  )
}

export default NameList