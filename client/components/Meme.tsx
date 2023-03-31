import { useState } from 'react'
import { memeData } from '../../common/interfaces'
import { useAppSelector } from '../hooks/redux'

export default function Meme() {
  const [formData, setFormData] = useState({ toptext: '', bottomtext: '' })
  const randomNumberIndex = Math.floor(Math.random() * 15)
  const memeState = useAppSelector((state) => state.meme)
  // console.log(memeState[0].image)
  // Will work once the dispatch is done from MemeForm
  const memeImage = memeState[randomNumberIndex].image

  return (
    <div>
      <h2>Here is your meme!</h2>
      {/* <p>{randomNumberIndex}</p> */}
      {/* <p>{formData.toptext}</p> */}
      {/* <p>{formData.bottomtext}</p> */}
      <img src={memeImage} alt="" />
    </div>
  )
}
