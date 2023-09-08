import { useEffect, useRef } from 'react'
import Video from './Video'

function Example14() {

    const videoRef = useRef()

    // using useImperativeHandle() only expose required functions
    // not expose the reference element anymore
    useEffect(() => {
        console.log(videoRef.current)
    }, [])

    const handleStart = () => {
        videoRef.current.play()
    }

    const handleStop = () => {
        videoRef.current.stop()
    }

    return (
        <div>
            <h2>demo useImperativeHandle()</h2>

            <Video ref={videoRef} />
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Example14