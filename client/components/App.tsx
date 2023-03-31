import MemeForm from './MemeForm'
import Meme from './Meme'
import { useEffect, useState, FormEvent, ChangeEvent } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MemeForm />} />

        <Route path="/meme" element={<Meme />} />
      </Routes>
    </>
  )
}

export default App
