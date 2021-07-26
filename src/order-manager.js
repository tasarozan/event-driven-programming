const eventBus = require('./event-bus')
const Order = require('./order')

module.exports = class OrderManager {
  orders = []

  constructor() {
    eventBus.on('invoice created', (invoice) => {
      const order = new Order(invoice.product, invoice)
      this.orders.push(order)

      eventBus.emit('order created', order, invoice.adress)
    })

    eventBus.on('delivery completed', (delivery) => {
      delivery.order.delivered = true
    })
  }
}
