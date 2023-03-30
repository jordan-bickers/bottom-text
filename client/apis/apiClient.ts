import request from 'superagent'
import { memeData } from '../../common/interfaces'

export function fetchAllMemes(): Promise<memeData[]> {
  return request.get('/api/v1/memes').then((memesres) => memesres.body)
}
