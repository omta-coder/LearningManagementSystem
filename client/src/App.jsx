import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth/AuthPage'

const App = () => {
  return (
    <Routes>
      <Route path='/auth' element={<AuthPage/>}/>
      
    </Routes>
  )
}

export default App