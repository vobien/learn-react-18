import { useEffect, useState } from "react"

const tabs = ['posts', 'albums', 'todos']

function Example5() {
    const [type, setType] = useState('posts')
    const [query, setQuery] = useState('')
    const [data, setData] = useState([])
    const [showGoTop, setShowGoTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => setData([...data]))
    }, [type])

    const handleSrcoll = () => {
        setShowGoTop(window.scrollY > 100)
    }
    
    const handleGoTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleSrcoll)

        // clean function 
        return () => {
            console.log('Clean function before unmounting')
            window.removeEventListener('scroll', handleGoTop)
        }
    }, [])

    return (
        <div>
            {
                tabs.map((tab, id) => 
                    <button key={id}
                        onClick={() => setType(tab)}
                    >
                        {tab}
                    </button>
                )
            }

            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {
                    data.map((value, id) => 
                        (<li key={id}> {value.title} </li>)
                    )
                }
            </ul>

            {
                showGoTop && <button 
                    style={{
                        position: 'fixed',
                        bottom: '3rem',
                        right: '1rem',
                        backgroundColor: 'lightblue',
                    }}
                    onClick={handleGoTop}
                >
                    Go To Top
                </button>
            }
        </div>
    )
}

export default Example5