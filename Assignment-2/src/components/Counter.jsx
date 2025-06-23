import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    function incrementHandler(){
        setCount(count+1)
    }

    function decrementHandler(){
        setCount(count-1)
    }

    return (
        <div>
            <div>
                <button onClick={incrementHandler}>
                    Increment
                </button>
                <div>
                    <p>{count}</p>
                </div>
                <button onClick={decrementHandler}>
                    Decrement
                </button>
            </div>
            <div>-----------------------------------------------------------------------</div>
        </div>
    )
}

export default Counter
