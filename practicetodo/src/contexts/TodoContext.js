import { createContext, useContext } from "react"


export const TodoContent = createContext({
    todos: [{
        id: 1,
        todo: "msg",
        complete: false
    }],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

export default TodoContent.Provider


export const useTodo = () => {
    return useContext(TodoContent)
}
