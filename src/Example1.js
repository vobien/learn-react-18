import { useState } from "react"

function Example1() {
    const [counter, setCounter] = useState(1)

    const handleClick = () => {
        // simple way
        // setCounter(counter + 1)

        // use prev state in a function
        setCounter(prev => prev + 1)
    }

    console.log("re-render")
    return (
        <div>
            <h2>Example 1: Counter with useState()</h2>
            <p>Counter: {counter} </p>
            <button onClick={handleClick}>Add 1</button>
        </div>
    )
}

export default Example1