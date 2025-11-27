import { Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './Pages/Index'
import PageNotFound from './Pages/PageNotFound'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>

 
    </>
  )
}

export default App
