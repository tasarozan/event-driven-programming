const Delivery = require('./delivery')
const eventBus = require('./event-bus')

module.exports = class LogisticsManager {
  constructor() {
    eventBus.on('order created', (order, adress) => {
      const delivery = new Delivery(order, adress)

      eventBus.emit('delivery created', delivery)
    })
  }

  deliver(delivery) {
    console.log('delivering', delivery)
    eventBus.emit('delivery completed', delivery)
    return true
  }
}
