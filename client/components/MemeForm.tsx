import { useState, FormEvent, ChangeEvent } from 'react'

export default function MemeForm() {
  const [formData, setFormData] = useState({ toptext: '', bottomtext: '' })

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
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
    </form>
  )
}
