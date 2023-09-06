import { useState } from "react"

function Example4() {

    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState(() => {
        const existingTodos = localStorage.getItem('myTodo')
        return existingTodos ? JSON.parse(existingTodos) : []
    })

    const handleAddTodo = () => {
        const newTodos = [
            ...todos,
            todo
        ]

        setTodos(newTodos)
        setTodo('')
        localStorage.setItem('myTodo', JSON.stringify(newTodos))
    }

    return (
        <div> 
            <input type="text" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            /> 
            <button onClick={handleAddTodo}>Add</button>

            <ul>
                {
                    todos.map((todo, id) => (
                        <li key={id}> {todo} </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Example4