const eventBus = require('./event-bus')

module.exports = class User {
  orders = []
  balance = 0
  adress = 'Adress'

  constructor() {
    eventBus.on('payment succesful', (product, payment) => {
      this.balance -= payment
    })
    eventBus.on('order created', (order) => {
      this.orders.push(order)
    })
  }

  buy(product) {
    eventBus.emit('buying started')
    eventBus.emit('pay', this.balance, product, this.adress)
    eventBus.emit('buying finished')
  }

  addBalance(amount) {
    this.balance += amount
  }
}
