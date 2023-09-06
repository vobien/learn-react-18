import { useState } from "react"

const gifts = [
    "iphone 14",
    "laptop lenovo",
    "watch samsung"
]

function Example2() {

    const [gift, setGift] = useState()

    const handleGetGift = () => {
        const id = Math.floor(Math.random() * gifts.length)
        setGift(gifts[id])
    }

    return (
        <div>
            <h2>Gift Generation</h2>
            <button onClick={handleGetGift}>Get gift</button> 
            <p>{gift || "You don't have gift yet, please click button 'Get Gift'"}</p>
        </div>
    )
}

export default Example2