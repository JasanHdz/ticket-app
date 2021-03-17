const Ticket = require("./ticket");

class TicketList {
  constructor() {
    this.lastNumber = 0;

    this.slopes   = [] 
    this.assigned = []
  }

  get nextNumber() {
    this.lastNumber += 1
    return this.lastNumber
  }

  get lastNumbers() {
    return this.assigned.slice(0, 13)
  }

  createTicket() {
    const ticket = new Ticket(this.nextNumber)
    this.slopes.push(ticket)
    return ticket
  }

  assignTicket(agent, desk) {
    if (this.slopes.length === 0) return null

    const nextTicket = this.slopes.shift()

    nextTicket.agent = agent
    nextTicket.desk = desk

    this.assigned.unshift(nextTicket)
    return nextTicket
  }
}

module.exports = TicketList