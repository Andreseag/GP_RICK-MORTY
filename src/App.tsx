import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { Home, Character } from './pages'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/character' element={<Character/>} />
      </Routes>
    </div>
  )
}

export default App
