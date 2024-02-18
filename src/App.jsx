import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Stonepaperscissor } from './components/stonepaperscissor'
import { Imageslide } from './components/imageslide'
import { Celebration } from './components/celebration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Stonepaperscissor></Stonepaperscissor>
        {/* <Imageslide></Imageslide> */}
        {/* <Celebration></Celebration>/ */}
       </div>
    </>
  )
}

export default App
