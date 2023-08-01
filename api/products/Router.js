const app = require('express')
const router = app.Router()
const { Productbybrand, postProducts ,Productbycategory } = require('./Controller')

router.get('/productsbybrand', Productbybrand)
router.get('/Productbycategory', Productbycategory)
router.post('/products', postProducts)

module.exports = router