import type { ThunkAction } from '../store'
// import { Meme } from '../../models/meme'
import { fetchAllMemes } from '../apis/apiClient'

export const REQUEST_MEME = 'REQUEST_MEME'
export const RECEIVE_MEME = 'RECEIVE_MEME'
export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_FORM = 'RECEIVE_FORM'

export type Action =
  | { type: typeof REQUEST_MEME; payload: null }
  | { type: typeof RECEIVE_MEME; payload: string[] }
  | { type: typeof SHOW_ERROR; payload: string }
  | {
      type: typeof RECEIVE_FORM
      payload: { bottomText: string; topText: string }
    }

export function requestMeme(): Action {
  return {
    type: REQUEST_MEME,
    payload: null,
  }
}

export function receiveMeme(imageArr: string[]): Action {
  return {
    type: RECEIVE_MEME,
    payload: imageArr,
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function receiveForm(bot: string, top: string): Action {
  return {
    type: RECEIVE_FORM,
    payload: { bottomText: bot, topText: top },
  }
}

export function fetchMeme(): ThunkAction {
  return (dispatch) => {
    dispatch(requestMeme())
    return fetchAllMemes()
      .then((imageArr: string[]) => {
        dispatch(receiveMeme(imageArr))
      })
      .catch((err: Error) => {
        dispatch(showError(err.message))
      })
  }
}
