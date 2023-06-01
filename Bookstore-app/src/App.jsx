import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Book } from './components/book'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Book/>
      </div>
       
    </>
  )
}

export default App
