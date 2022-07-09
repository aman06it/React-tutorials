import React from 'react'

const Hello = ()=>{
    // return (
    //     <div>
    //         <h1>Hello Aman</h1>
    //     </div>
    // )

    //without JSX
    return React.createElement(
        'div',
        null,//we can provide attribute's in form of object exe: {id:'name', className:'dummyPath'}
        React.createElement('h1',null, 'Hello Aman')
        )
}

export default Hello