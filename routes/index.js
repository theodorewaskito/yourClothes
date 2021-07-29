router = require('express').Router()
const Controller = require('../controllers/clothesController')

router.get('/clothes', Controller.showClothes)
router.get('/clothes/add', Controller.getAddClothes)
router.post('/clothes/add', Controller.postAddClothes)
// router.get('/clothes/edit', Controller.getEditClothes)
// router.post('/clothes/edit', Controller.postEditClothes)
router.get('/clothes/delete/:id', Controller.deleteClothes)

module.exports = router
