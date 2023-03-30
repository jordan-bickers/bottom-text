import { useState, FormEvent, ChangeEvent } from 'react'
import { receiveForm } from '../actions/meme'
import { useAppDispatch } from '../hooks/redux'

export default function MemeForm() {
  const [formData, setFormData] = useState({ toptext: '', bottomtext: '' })
  const dispatch = useAppDispatch()

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    console.log(formData)

    dispatch(receiveForm(formData.bottomtext, formData.toptext))
    // api call here
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="toptext">TOP TEXT: </label>
      <input type="text" id="toptext" name="toptext" onChange={changeHandler} />

      <label htmlFor="toptext">BOTTOM TEXT: </label>
      <input
        type="text"
        id="bottomtext"
        name="bottomtext"
        onChange={changeHandler}
      />
      <button onClick={submitHandler}>subbie</button>
    </form>
  )
}
