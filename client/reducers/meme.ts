import { Action, RECEIVE_MEME } from '../actions/meme'
// import { Meme } from '../../common/interfaces'

const initialState = [{ id: '', image: './random' }]

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
