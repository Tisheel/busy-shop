import { Server } from 'socket.io'
import { Express } from 'express'
import { createServer } from 'http'

export default (app: Express) => {

    const server = createServer(app)
    const io = new Server(server)

    io.on('connection', (socket) => {
        console.log('Connected: ' + socket.id)
    })

    io.on('disconnect', (socket) => {
        console.log('Disconnected: ' + socket.id)
    })

}