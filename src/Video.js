import { useRef, forwardRef, useImperativeHandle } from 'react'
import video from './video/tiktok.mp4'

function Video(props, ref) {

    const vidRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            vidRef.current.play()
        },
        stop() {
            vidRef.current.pause()
        },
    }))

    return (
        <div>
            <video ref={vidRef} width={300} src={video} />
        </div>
    )
}

export default forwardRef(Video)
