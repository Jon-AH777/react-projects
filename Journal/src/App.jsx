import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import Place from '../components/Place'
import Data from './Data'

import world from './assets/world.png'
import pointer from './assets/placeholder.png'


function App() {
  const dataset = Data.map((Data) => {
    return (
      <Place 
        point= {pointer}
        details={Data}
      />
    )
  })
  /* const dataset = Data.map(myDataFunction)
  function myDataFunction(elementItems) {
    return(
      <Place
        point = {pointer}
        details = {elementItems}
       />
    );
  } */
  return (
    <div className='react--app--container'>
      <div className="nav--cont--bar">
        <Navbar img={world} />
      </div>
      <div className="app--container">
        {dataset}
      </div>
    </div>
  )
}

export default App
