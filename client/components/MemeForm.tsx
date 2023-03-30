import { useState } from "react"

export default function MemeForm() {
  const [formData, setFormData] = useState({
    top-text: '',
    bottom-text: ''
  })
  return (


    const submitHandler = () => {

    }

    const changeHandler = () => {

    }

    <form onSubmit={submitHandler}>
      <label htmlFor="top-text">TOP TEXT: </label>
      <input type="text" id="top-text" name="top-text"/>

      <label htmlFor="top-text">BOTTOM TEXT: </label>
      <input type="text" id="bottom-text" name="bottom-text"/>
    </form>
  )
}
