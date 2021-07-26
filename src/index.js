const Inventory = require('./inventory')
const User = require('./user')
const PaymentProcessor = require('./payment-processor')
const Product = require('./product')
const InvoiceManager = require('./invoice-manager')
const LogisticsManager = require('./logistics-manager')
const AnalyticsManager = require('./analytics-manager')
const OrderManager = require('../order-manager')

const eventBus = require('./event-bus')

eventBus.on('delivery created', (delivery) => {
  logisticsManager.deliver(delivery)
})

const inventory = new Inventory()
const paymentProcessor = new PaymentProcessor()
const invoiceManager = new InvoiceManager()
const logisticsManager = new LogisticsManager()
const orderManager = new OrderManager()

const camera = new Product('Video Camera', 999.99)
const ozan = new User()

try {
  inventory.addProduct(camera)
  inventory.addProduct(camera)

  ozan.addBalance(2000)

  ozan.buy(camera)
  ozan.buy(camera)
  ozan.buy(camera)
} catch (e) {
  console.log(e)
}
AnalyticsManager.printActions()

console.log(ozan)
