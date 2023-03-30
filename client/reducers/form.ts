import { Action, RECEIVE_FORM } from '../actions/meme'

const initialState = [{ bottomText: 'bottomText', topText: 'topText' }]

function formReducer(state = initialState, action: Action) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_FORM:
      return payload
    default:
      return state
  }
}

export default formReducer
