import type { ThunkAction } from '../store'
import { Meme } from '../../models/meme'
import { fetchMemeApi } from '../apis/meme'

export const REQUEST_MEME = 'REQUEST_MEME'
export const RECEIVE_MEME = 'RECEIVE_MEME'
export const SHOW_ERROR = 'SHOW_ERROR'

export type Action =
  | { type: typeof REQUEST_MEME; payload: null }
  | { type: typeof RECEIVE_MEME; payload: Meme }
  | { type: typeof SHOW_ERROR; payload: string }

export function requestMeme(): Action {
  return {
    type: REQUEST_MEME,
    payload: null,
  }
}

export function receiveMeme(singleMeme: Meme): Action {
  return {
    type: RECEIVE_MEME,
    payload: singleMeme,
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchMeme(): ThunkAction {
  return (dispatch) => {
    dispatch(requestMeme())
    return fetchMemeApi()
      .then((singleMeme) => {
        dispatch(receiveMeme(singleMeme))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
