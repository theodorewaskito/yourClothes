const router = require('express').Router()
const clothesController = require('../controllers/clothesController')

router.get('/product', clothesController.showClothes)
router.get('/clothes/add', clothesController.getAddClothes)
router.post('/clothes/add', clothesController.postAddClothes)
router.get('/clothes/edit/:id', clothesController.getEditClothes)
router.post('/clothes/edit/:id', clothesController.postEditClothes)
router.get('/clothes/delete/:id', clothesController.deleteClothes)
router.get('/purchase', clothesController.userPurchase)


module.exports = router