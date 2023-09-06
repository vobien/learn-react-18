import { useState } from "react"


const data = [1, 2, 5]

function Example1() {

    // -----------------------------------------//
    // we can initialize the value for useState with a function 
    // its return value will be assigned to the state
    // it only run ONCE
    const [value, setValue] = useState(() => {
        // do another stuff here
        console.log("calc initial value ONCE")
        return data.reduce((acc, cur) => acc + cur, 0)
    })

    const handleValue = () => {
        setValue(value + 1)
    }

    // -----------------------------------------//
    const [counter, setCounter] = useState(1)
    const handleClick = () => {
        // simple way
        // setCounter(counter + 1)

        // use prev state in a function
        setCounter(prev => prev + 1)
    }

    // -----------------------------------------//
    // state with Object
    const [user, setUser] = useState({
        name: "tri",
        age: 30
    })
    const handleUpdateUser = () => {

        // version 1
        // setUser(prev => {
        //     return {
        //         ...prev,
        //         age: 33
        //     }
        // })

        // version 2: simpler
        setUser({
            ...user,
            name: "nancy"
        })
    }

    return (
        <div>
            <h2>Example 1: Counter with useState()</h2>
            <p>Counter: {counter} </p>
            <button onClick={handleClick}>Add 1</button>

            <p>Value: {value}</p> 
            <button onClick={handleValue}>Value + 1</button>

            <p>User: {user.name}, {user.age} </p>
            <button onClick={handleUpdateUser}>Change User</button>
        </div>
    )
}

export default Example1