import {memo} from 'react'

function Example9Child({onIncrease}) {
    console.log("re-render")
    return (
        <>
            <h2>Demo useCallback() & useMemo()</h2>
            <button onClick={onIncrease}>Add 1</button>
        </>
    )
}

// memo here is Higher Order Component
export default memo(Example9Child)