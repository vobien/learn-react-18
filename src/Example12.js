import { useRef, useReducer } from "react"

// initial state
const initial = {
    todo: '',
    todos: []
}

const SET_TODO = 'SET_TODO'
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

// action
const setTodo = (payload) => ({
    type: SET_TODO,
    payload
})

const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
})

const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
})


// reducer
const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case SET_TODO:
            newState = {
                ...state,
                todo: action.payload
            }
            break
        case ADD_TODO:
            newState = {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
            break
        case DELETE_TODO:
            let newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            newState = {
                ...state,
                todos: newTodos
            }
            break
        default:
            new Error('Invalid action type')
    }
    return newState
}


// TODO app using useReducer()
function Example12() {
    const inputRef = useRef()
    const [state, dispatch] = useReducer(reducer, initial)
    const { todo, todos } = state
    
    const handleAddTodo = () => {
        dispatch(addTodo(todo))
        dispatch(setTodo(''))
        inputRef.current.focus()
    }

    return (
        <div> 
            <h2>Todo App</h2>
            <input ref={inputRef} type="text" 
                value={todo}
                onChange={(e) => dispatch(setTodo(e.target.value))}
            /> 
            <button onClick={handleAddTodo}>Add</button>

            <ul>
                {
                    todos.map((todo, id) => (
                        <li key={id}> {todo} 
                            <span style={{color: 'red'}}
                                onClick={() => dispatch(deleteTodo(id))}
                            >  x</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Example12