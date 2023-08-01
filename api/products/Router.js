const app = require('express')
const router = app.Router()
const { getProducts, postProducts } = require('./Controller')

router.get('/products', getProducts)
router.post('/products', postProducts)

module.exports = router