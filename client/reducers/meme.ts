import { Action, RECEIVE_MEME } from '../actions/meme'
import { Meme } from '../../models/memes'

const initialState: Meme = { topText: '', bottomText: '', image: '' }

function memeReducer(state = initialState, action: Action): Meme {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_MEME:
      return payload
    default:
      return state
  }
}

export default memeReducer
