import React, { useState} from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(15);
    return (
        // <div className='counter-container'>
        //     <p id='para'>you have clicked {count} times.</p>
        //     <button id='button' onClick={()=>{setCount(count+1)}}>click me</button>
        // </div>
        <div className='container-para'>
            <p id='para'>you clicked me {count}times</p>
            <button id='btn'>click here</button>
        </div>
    )
}

export default Counter
