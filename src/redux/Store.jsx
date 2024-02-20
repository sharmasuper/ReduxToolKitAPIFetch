import { configureStore } from '@reduxjs/toolkit'
import Todo from './Slices/Todo'
export const Store = configureStore({
    reducer : {
        Todos : Todo
    }
})