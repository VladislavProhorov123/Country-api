import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CountryPage from './pages/CountryPage'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/country/:code' element={<CountryPage />} />
    </Routes>
    </BrowserRouter>
  )
}
