const eventBus = require('./event-bus')

module.exports = class PaymentProcessor {
  constructor() {
    eventBus.on('pay', (balance, product, adress) => {
      this.pay(balance, product, adress)
    })
  }
  pay(balance, product, adress) {
    if (balance < product.price) {
      return eventBus.emit('insufficent funds')
    }

    eventBus.emit('payment succesful', product, product.price, adress)
  }
}
