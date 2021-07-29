const router = require('express').Router()
const Controller = require('../controllers/clothesController')
const userRoute = require('./userRoute');
const authRoute = require('./authRoute');

router.get('/', (req, res) => {
    res.send('hello')
})
router.use('/', authRoute)
router.get('/user', (req, res) => {
    res.send('Page User')
})

router.get('/clothes', checkLogin, checkAdmin, Controller.showClothes)
router.get('/clothes/add', Controller.getAddClothes)
router.post('/clothes/add', Controller.postAddClothes)
// router.get('/clothes/edit', Controller.getEditClothes)
// router.post('/clothes/edit', Controller.postEditClothes)
router.get('/clothes/delete/:id', Controller.deleteClothes)

function checkLogin(req, res, next) {
    if (req.session.isLogin) {
        next()
    } else {
        res.redirect('/login')
    }
}

function checkAdmin(req, res, next) {
    if (req.session.role === 'admin') {
        next()
    } else {
        res.redirect('/user')
    }
}

module.exports = router
