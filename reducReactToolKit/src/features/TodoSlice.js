import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: nanoid(),
            text: ""
        }]
}

// function sayHello() {
//     console.log("Hello world");
// }

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // addTodo: sayHello,  //we can reference a method

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            console.log('Updating todo with ID:', action.payload.id);
            console.log('Current todos:', state.todos);

        },
        updateTodo: (state, action) => {
            console.log('Updating todo with ID:', action.payload.id);
            console.log('Current todos:', state.todos);
            state.todos = state.todos.map((prevTodo) => prevTodo.id === action.payload.id ? { ...prevTodo, text: action.payload.text } : prevTodo)
        },

        // effecient ways 
        // updateTodo: (state, action) => {
        //     const index = state.todos.findIndex((prevTodo) => prevTodo.id === action.payload.id);
        //     if (index !== -1) {
        //         state.todos[index] = action.payload
        //     }
        // },

        // updateTodo: (state, action) => {
        //     const { id, text } = action.payload
        //     const todo = state.todos.find((todo) => todo.id === id);
        //     if (todo) {
        //         todo.text = text;
        //     }
        // },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }

    }
})

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer