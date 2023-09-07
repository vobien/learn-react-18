import { useState, useRef } from "react"

// TODO app using state
function Example11() {

    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState(() => {
        const existingTodos = localStorage.getItem('myTodo')
        return existingTodos ? JSON.parse(existingTodos) : []
    })

    const inputRef = useRef()

    const handleAddTodo = () => {
        const newTodos = [
            ...todos,
            todo
        ]

        setTodos(newTodos)
        setTodo('')
        localStorage.setItem('myTodo', JSON.stringify(newTodos))
        inputRef.current.focus()
    }

    const handleDelete = (id) => {
        let newTodos = [...todos]
        newTodos.splice(id, 1)
        setTodos(newTodos)
    }

    return (
        <div> 
            <h2>Todo App</h2>
            <input ref={inputRef} type="text" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            /> 
            <button onClick={handleAddTodo}>Add</button>

            <ul>
                {
                    todos.map((todo, id) => (
                        <li key={id}> {todo} 
                            <span style={{color: 'red'}}
                                onClick={() => handleDelete(id)}
                            >  x</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Example11