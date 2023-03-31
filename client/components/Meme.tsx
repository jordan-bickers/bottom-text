import { useState, useEffect } from 'react'
import { memeData } from '../../common/interfaces'
import { useAppSelector } from '../hooks/redux'
import { Link, Route, Routes } from 'react-router-dom'

export default function Meme() {
  const randomNumberIndex = Math.floor(Math.random() * 15)
  const memeState = useAppSelector((state) => state.meme)
  const text = useAppSelector((state) => state.formReducer)
  const [top, setTop] = useState('Top Text')
  const [bot, setBot] = useState('Bottom Text')
  console.log('Jordan was wrong :(')

  useEffect(() => {
    setTop(text.topText)
    setBot(text.bottomText)
  }, [top, bot])

  // console.log(memeState[0].image)
  // Will work once the dispatch is done from MemeForm
  const memeImage = memeState[randomNumberIndex].image

  return (
    <>
      <div>
        <h2>Here is your meme!</h2>
        <p className="topText">{top}</p>
        <img src={memeImage} alt="" />
        <p className="bottomText">{bot}</p>
        <Link to="/">
          <button className="homeButton">Home</button>
        </Link>
      </div>
    </>
  )
}
