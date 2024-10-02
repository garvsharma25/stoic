import { useState } from 'react'
import Navbar from './components/Navbar'

import History from './components/History'
import CorePrinciples from './components/CorePrinciples'
import Importantthinker from './components/Importantthinker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <History/>
      <CorePrinciples/>
      <Importantthinker/>
    </>
  )
}

export default App
