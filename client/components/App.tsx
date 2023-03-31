import MemeForm from './MemeForm'
import '../../server/public/main.css'
import Meme from './Meme'
// import { useEffect, useState, FormEvent, ChangeEvent } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold title">BOTTOM TEXT</h1>
      <Routes>
        <Route path="/" element={<MemeForm />} />
        <Route path="/meme" element={<Meme />} />
      </Routes>
    </>
  )
}

export default App
