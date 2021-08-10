import React, { useState } from 'react'

const Timer = () => {

    const [timer, setTimer] = useState(0)

    const counter = () => {
        setTimer(() => timer + 1)
    }

    return (
        <div>
            <h2>Timer</h2>
            <h3>{timer}</h3>
            <button onClick={counter}>Click Me!</button>
        </div>
    )
}

export default Timer
