const router = require('express').Router()
const clothesController = require('../controllers/clothesController')

router.get('/', clothesController.showClothes)
router.get('/add', clothesController.getAddClothes)
router.post('/add', clothesController.postAddClothes)
router.get('/edit/:id', clothesController.getEditClothes)
router.post('/edit/:id', clothesController.postEditClothes)
router.get('/delete/:id', clothesController.deleteClothes)

module.exports = router