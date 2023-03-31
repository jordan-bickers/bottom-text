client / components / MemeForm.tsx:

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

server / public / styles.css
  
/*!*******************************************************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/styles/index.scss ***!
  \*******************************************************************************************************************/
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

body {
  top: 0;
  left: 0;
  margin: auto;
  padding: 20px;
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: 90vw;
}

.link{
  position: relative;
  left: 77.5vw;
  top: 2.5vh;
}

.title {
  position: static;
  margin: auto;
  text-align: center;
}

.topText, .bottomText {
  font-family: impact;
  font-size: 4.5em;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;
  text-shadow:2px 2px 0 #000,
  -2px -2px 0 #000,
  2px -2px 0 #000,
  -2px 2px 0 #000,
  0px 2px 0 #000,
  2px 0px 0 #000,
  0px -2px 0 #000,
  -2px 0px 0 #000,
  2px 2px 5px #000;

}


/*# sourceMappingURL=styles.css.map*/
  
client / webpack.config.js
  
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: ['./client/index.tsx'],
  output: {
    path: path.join(__dirname, '..', 'server', 'public'),
    filename: 'bundle.js',
  },
  mode: 'development',
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
}
