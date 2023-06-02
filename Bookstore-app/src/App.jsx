import { useState } from 'react'

import './App.css'
import { Allbooks } from './components/books'
import { TestNavbar } from './components/navbar/navbar'
import { Allroute } from './routes/router'
import { Box } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Box w={"100%"}
            h={"full"}
            opacity={1}
            backgroundImage={
                "url(https://images.unsplash.com/photo-1575220360526-be964710f279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"} >
      <TestNavbar/>
      <Allroute/>
      </Box>
       
    </>
  )
}

export default App
