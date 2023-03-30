import express from 'express'
import { getAllMemes } from '../db/connection'
import { memeData } from '../../common/interfaces'

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  return getAllMemes().then((memes: memeData[]) => res.json(memes))
})

export default router
