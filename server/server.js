const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3800
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New user connected!')
    socket.emit('newMessage', {
        from: 'Dzambo',
        text: 'Pogledaj kako chattujem',
        createdAt: 123
    })
    socket.on('createMessage', (newMsg) => {
        console.log('createMessage', newMsg);
    })
    socket.on('disconnect', () => {
        console.log('User was disconnected!');
    })
})

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
})
