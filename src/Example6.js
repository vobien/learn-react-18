import { useEffect, useState } from "react"

function Example6() {
    const [avatar, setAvatar] = useState()

    const handlePickImage = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    useEffect(() => {

        // clean function - avoid memory leak
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    return (
        <div>
            <input type="file" onChange={handlePickImage}/>
            <div>
                {avatar && 
                    <img src={avatar.preview} alt="mypic" 
                        style={{
                            width: '30%',
                            borderRadius: '50%'
                        }} 
                    />
                }
            </div>
        </div>

    )
}

export default Example6