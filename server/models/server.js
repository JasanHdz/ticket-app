const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const path = require('path')
const cors = require('cors')
const Sockets = require('./sockets')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT

    this.server = http.createServer(this.app)
    this.io = socketio(this.server, {/** configuraciones */ })
    
    // init sockets
    this.sockets = new Sockets(this.io)
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, '../public')))
    this.app.use(cors())

    // GET ticket list
    this.app.get('/last', (req, res) => {
      res.json({
        status: 200,
        last: this.sockets.ticketList.lastNumbers
      })
    })
  }

  // socketsConfig() {
  //   new Sockets(this.io)
  // }

  execute() {
    // init middlewares
    this.middlewares()

    // // init sockets
    // this.socketsConfig()

    // init server
    this.server.listen(this.port, () => {
      console.log(`server corriendo en http://localhost:${this.port}`)
    }) 
  }
}

module.exports = Server