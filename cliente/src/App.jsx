import { useState } from 'react'
import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import './App.css'
import { Register } from './pages/Register.jsx'
import { Login } from './pages/Login.jsx'
import { ProtectedRoute } from './pages/ProtectedRoute.jsx'
import { Profile } from './pages/profile.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/profile' element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>


    </>
  )
}

export default App
