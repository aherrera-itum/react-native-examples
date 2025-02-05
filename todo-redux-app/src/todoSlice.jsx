import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos', 
    initialState: [],
    reducers: {
        addTodo: (state, action )=> {
            state.push( {id: Date.now(), text: action.payload } )
        },
        removeTodo: (state, action )=> {
            return state.filter( todo => todo.id != action.payload )
        },
        updateTodo: (state, action )=> {
            const { id, newText } = action.payload
            const todoToUpdate = state.find(todo => todo.id === id )
            if (todoToUpdate){
                todoToUpdate.text = newText
            }

        },
    }
})


export const { addTodo, removeTodo, updateTodo } = todosSlice.actions

export default todosSlice.reducer