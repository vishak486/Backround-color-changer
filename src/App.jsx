import { useState } from 'react'
import './App.css'

function App() {
  
  const changeColor=(color)=>{

    const data=color
    document.body.style.backgroundColor=data
  }

  return (
    <>
     <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className='text-warning'>BackGround Color change</h1>
      <div className='d-flex mt-3 '>
        <button onClick={()=>{changeColor('red')}}  className='mx-3 btn btn-danger'>Red</button>
        <button onClick={()=>{changeColor('yellow')}} className='mx-3 btn btn-warning'>Yellow</button>
        <button onClick={()=>{changeColor('green')}} className='mx-3 btn btn-success'>Green</button>
        <button onClick={()=>{changeColor('blue')}} className='mx-3 btn btn-primary '>blue</button>
        <button onClick={()=>{changeColor('grey')}} className='mx-3 btn btn-dark '>Grey</button>
        <button onClick={()=>{changeColor('aqua')}} className='mx-3 btn btn-info '>Aqua</button>
      </div>
     </div>
    </>
  )
}

export default App
