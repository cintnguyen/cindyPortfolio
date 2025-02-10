import { useState } from 'react'
import Header from './components/Header'
import Portfolio from './components/Portfolio'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header />
      <Portfolio />
    </main>
  )
}

export default App
