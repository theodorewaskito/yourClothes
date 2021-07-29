const router = require('express').Router()

const userRoute = require('./userRoute');
const authRoute = require('./authRoute');
const clothesRouter = require('./clothesRoute')//tambahan

router.get('/', (req, res) => {
    res.send('hello')
})
router.use('/', authRoute)
router.use('/admin/clothes', clothesRouter) //tambahan
router.get('/user', (req, res) => {
    res.send('Page User')
})







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
