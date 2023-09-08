import { useState, useContext, createContext } from "react"


// useContext() to get value from ancestor
function Paragraph() {
    const mode = useContext(ThemeContext)

    return <div>
        <p className={mode}>This is a demo for useContext()
         - light/dark theme
        </p>
    </div>
}


// no need pass props via immediate children
function Content() {
    return <div>
        <Paragraph />
    </div>
}


// main component - use Context.Provider to wrap everything
const ThemeContext = createContext()

function Example13() {

    const [mode, setMode] = useState('light')

    const handleMode = () => {
        let newMode = mode === 'light' ? 'dark' : 'light'
        setMode(newMode)
    }

    return (
        <ThemeContext.Provider value={mode}>
            <div>
                <h2>Demo useContext()</h2>
                <button onClick={handleMode}>Dark Mode</button>
                <Content />
            </div>
        </ThemeContext.Provider>
    )
}

export default Example13