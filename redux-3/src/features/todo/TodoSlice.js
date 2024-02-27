import {createSlice,nanoid}  from '@reduxjs/toolkit';


const initialState = {
    todos:[{id:1,text:'Hello World'}]
}


export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,acton)=>{
            const todo ={
                id:nanoid(),
                text:acton.payload,
            }
            state.todos.push(todo);
        },
        removeTodo:(state,acton)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==acton.payload)
        },
    }
})


export const {addTodo,removeTodo} = todoSlice.actions;


export default todoSlice.reducer;