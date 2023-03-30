import express from 'express'
import path from 'path'
import memeRoutes from './routes/memeRoutes'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/memes', memeRoutes)

export default server
