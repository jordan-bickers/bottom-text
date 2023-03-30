import { Action, RECEIVE_MEME } from '../actions/meme'
import { memeData } from '../../common/interfaces'

const initialState = [{ imageArr: ['./random'] }]

function memeReducer(state = initialState, action: Action) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_MEME:
      return payload
    default:
      return state
  }
}

export default memeReducer
