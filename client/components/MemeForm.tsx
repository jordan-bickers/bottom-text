import { useEffect, useState, FormEvent, ChangeEvent } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { receiveForm } from '../actions/meme'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchMeme } from '../actions/meme'
import Meme from './Meme'

export default function MemeForm() {
  const [formData, setFormData] = useState({ toptext: '', bottomtext: '' })
  const dispatch = useAppDispatch()

  const submitHandler = (e: FormEvent) => {
    // e.preventDefault()

    dispatch(receiveForm(formData.bottomtext, formData.toptext))
    // api call hererea
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  useEffect(() => {
    dispatch(fetchMeme())
  }, [])

  return (
    <>
      <form
        className="space-y-12 border-b border-gray-900/10 pb-12"
        onSubmit={submitHandler}
      >
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              className="text-base font-semibold leading-7 text-gray-900"
              htmlFor="toptext"
            >
              TOP TEXT:{' '}
            </label>
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              id="toptext"
              name="toptext"
              onChange={changeHandler}
            />
          </div>

          <div className="sm:col-span-3">
            <label
              className="text-base font-semibold leading-7 text-gray-900"
              htmlFor="toptext"
            >
              BOTTOM TEXT:{' '}
            </label>
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              id="bottomtext"
              name="bottomtext"
              onChange={changeHandler}
            />
          </div>
        </div>
        <Link className="link " to="/meme">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={submitHandler}
          >
            subbie
          </button>
        </Link>
      </form>
    </>
  )
}
