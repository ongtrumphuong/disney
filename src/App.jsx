import { useState } from 'react'
import Header from './Components/Header'
import Slider from './Components/Slider'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Slider/>
      </div>
    </>
  )
}

export default App
