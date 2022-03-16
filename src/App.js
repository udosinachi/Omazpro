import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <div className='App'>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
