import knexFile from './knexfile'
import knex from 'knex'
import { meme, memeData } from '../../common/interfaces'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
const connection = knex(config)

export function getAllMemes(db = connection): Promise<memeData[]> {
  return db('memes').select()
}

export default connection
