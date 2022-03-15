import './App.css'
// import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home'

function App() {
  return (
    <div className='App'>
      <div>
        <Home />
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}
      </div>
    </div>
  )
}

export default App
