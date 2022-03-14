import './App.css'
import Header from './components/Header/Header'
// import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className='App'>
      <div>
        <Navbar />
        <Header />
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}
      </div>
    </div>
  )
}

export default App
