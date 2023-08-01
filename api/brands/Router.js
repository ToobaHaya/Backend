const app = require('express')
const router = app.Router()

const { AddBrand , brandByID , brandByName , getAllBrands , deleteAllBrands , updateBrand} = require("./Controller")

router.post('/add-brand', AddBrand)
router.get('/brandbyid/:id',brandByID)
router.get('/brandbyname/:BrandName',brandByName)
router.get('/getallbrands', getAllBrands)
router.delete('/deleteAllBrands', deleteAllBrands)
router.put('/updatebrands/${brandId}', updateBrand)

module.exports = router;