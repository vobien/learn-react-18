import { useCallback, useState } from "react"
import Example9Child from "./Example9Child"

function Example9() {
    const [count, setCount] = useState(0)

    // useCallback, 
    // if not every this component re-render, new function is created
    // then child component is re-rendered eventhough it is applied useMemo
    // MUST useCallback with useMemo, otherwise it is useless
    const handleIncrease = useCallback(() => {
        setCount(prev => prev+1)
    }, [])

    return (
        <div>
            <h2>{count}</h2>
            <Example9Child onIncrease={handleIncrease}/>
        </div>
    )
}

export default Example9