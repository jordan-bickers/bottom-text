import knexFile from './knexfile'
import knex from 'knex'
import { 'meme' } from 

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
const connection = knex(config)

export function getAllMemes(db = connection): promise<'Meme'[]> {
  return db('memes').select()
}

export default connection