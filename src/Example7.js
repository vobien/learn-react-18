import { useRef, useState } from "react"

function Example7() {
    const [count, setCount] = useState(0)

    // useRef to store the timerId 
    // if not, everytime UI is re-rendered, new timer is created
    const timerId = useRef()

    const handleStart = () => {
        timerId.current = setInterval(() => setCount(prev => prev+1), 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }

    // use ref link to an element
    const h2Ref = useRef()
    return (
        <div>
            <h2 ref={h2Ref}>{count}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Example7