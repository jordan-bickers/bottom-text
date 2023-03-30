import { Action, RECEIVE_MEME } from '../actions/meme'
import { memeData } from '../../common/interfaces'

interface Props {
  topText: string
  bottomText: string
  image: string
}

const initialState: Props[] = [{ topText: '', bottomText: '', image: '' }]

function memeReducer(state = initialState, action: Action): Props[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_MEME:
      return [...state]
    default:
      return state
  }
}

export default memeReducer
