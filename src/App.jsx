import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Swipslider from './components/Swipslider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Swipslider/>
    </>
  )
}

export default App
