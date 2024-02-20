import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
export const API = createAsyncThunk("fetchTodos",async()=>{
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   return response.json()
})






