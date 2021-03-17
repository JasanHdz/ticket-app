const TicketList = require('./ticket-list')

class Sockets {
  constructor(io) {
    this.io = io
    this.ticketList = new TicketList()
    this.socketEvents()
  }

  socketEvents() {
    this.io.on('connection', (socket) => {
      console.log('Cliente conectado')

      // listening event
      socket.on('create_ticket', (data, callback) => {
        console.log('New Ticket backend')
        const ticket = this.ticketList.createTicket()
        callback(ticket)
      })

      socket.on('next_assign_ticket', ({ agent, desk }, callback) => {
        const assignTicket = this.ticketList.assignTicket(agent, desk)
        callback(assignTicket)

        this.io.emit('ticket_assign', this.ticketList.lastNumbers)
      })
    })
  }
}

module.exports = Sockets