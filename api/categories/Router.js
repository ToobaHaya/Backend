const app = require('express')
const router = app.Router()

const { CreateCategory , CategoryByID , CategoryByName , deleteAllcategory , updateCategory} = require("./Controller")

router.post('/createCategory', CreateCategory)
// router.get('/categorybyid/:CategoryId',CategoryByID)
router.get('/categorybyname/:CategoryName',CategoryByName)
router.delete('/deleteAllcategory', deleteAllcategory)
router.put('/updatecategory/:CategoryId', updateCategory)

module.exports = router;