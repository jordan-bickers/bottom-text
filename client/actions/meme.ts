import type { ThunkAction } from '../store'
// import { Meme } from '../../models/meme'
import { fetchMemeApi } from '../apis/meme'

export const REQUEST_MEME = 'REQUEST_MEME'
export const RECEIVE_MEME = 'RECEIVE_MEME'
export const SHOW_ERROR = 'SHOW_ERROR'

export type Action =
  | { type: typeof REQUEST_MEME; payload: null }
  | {
      type: typeof RECEIVE_MEME
      payload: { topText: string; bottomText: string; image: string[] }
    }
  | { type: typeof SHOW_ERROR; payload: string }

export function requestMeme(): Action {
  return {
    type: REQUEST_MEME,
    payload: null,
  }
}

export function receiveMeme(
  top: string,
  bot: string,
  imgArr: string[]
): Action {
  return {
    type: RECEIVE_MEME,
    payload: { topText: top, bottomText: bot, image: imgArr },
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchMeme(bot: string, top: string): ThunkAction {
  return (dispatch) => {
    dispatch(requestMeme())
    return fetchMemeApi()
      .then((memeArr: string[]) => {
        dispatch(receiveMeme(top, bot, memeArr))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
