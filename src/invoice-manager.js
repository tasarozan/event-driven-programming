const eventBus = require('./event-bus')

class Invoice {
  payment = null
  adress = null
  product = null

  constructor(product, payment, adress) {
    this.payment = payment
    this.adress = adress
    this.product = product
  }
}

module.exports = class InvoiceManager {
  constructor() {
    eventBus.on('payment succesful', (product, payment, adress) => {
      const invoice = this.issueInvoice(product, payment, adress)

      eventBus.emit('invoice created', invoice)
    })
  }

  issueInvoice(product, payment, user) {
    return new Invoice(product, payment, user)
  }
}
