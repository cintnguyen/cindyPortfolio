import { useState } from 'react'
import Header from './components/Header'
import Portfolio from './components/Portfolio'

import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Portfolio />
    </div>
  )
}

export default App
