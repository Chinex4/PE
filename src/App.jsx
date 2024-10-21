import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import MainNavagetion from './components/MainNavagetion';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black min-h-screen font-sans'>
      <MainNavagetion />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>

    </div>
  )
}

export default App
