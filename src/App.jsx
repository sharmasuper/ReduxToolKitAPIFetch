import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { API } from './API/API'
function App() {
    const dispatch = useDispatch()
    const Selector = useSelector((state)=>state.Todos)
    console.log(Selector,Selector.isLoading)
    console.log("data" ,Selector)
      if(Selector.isLoading){
        return <h1>...Loading</h1>
      }
  return (
    <>
    <div>
    <button onClick={(e)=>dispatch(API())}>fetchTodos</button>
      {Selector.data && Selector.data.map(e=><p key={e.id}>{e.email}</p>)} 
    </div>
       
    </>
  )
}

export default App
