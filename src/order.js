module.exports = class Order {
  product = null
  invoice = null

  constructor(product, invoice) {
    this.product = product
    this.invoice = invoice
  }
}
