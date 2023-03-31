import { useEffect, useState, FormEvent, ChangeEvent } from 'react'
import { receiveForm } from '../actions/meme'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchMeme } from '../actions/meme'

export default function MemeForm() {
  const [formData, setFormData] = useState({ toptext: '', bottomtext: '' })
  const dispatch = useAppDispatch()

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()

    dispatch(receiveForm(formData.bottomtext, formData.toptext))
    // api call here
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  useEffect(() => {
    dispatch(fetchMeme())
  }, [])

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="toptext">TOP TEXT: </label>
        <input
          type="text"
          id="toptext"
          name="toptext"
          onChange={changeHandler}
        />

        <label htmlFor="toptext">BOTTOM TEXT: </label>
        <input
          type="text"
          id="bottomtext"
          name="bottomtext"
          onChange={changeHandler}
        />
        <button onClick={submitHandler}>subbie</button>
      </form>
    </>
  )
}
