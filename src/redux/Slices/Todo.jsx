import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

const Todo = createSlice({
    name : "todoSlice",
    initialState : {
        isLoading : false,
        data :null,
        isError :false,
      
    },
    extraReducers : (builder) =>{
             builder.addCase(API.pending,(state,action)=>{
                state.isLoading = true
                console.log(action)
             })
      
        builder.addCase(API.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(API.rejected,(state,action)=>{
            console.log('error',action.payload);
            state.isError = true
        })
    }
 

})
 
export default Todo.reducer

