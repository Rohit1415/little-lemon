import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home'

const RouteFile = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default RouteFile