const { User } = require('../models/index');
const { checkPassword } = require('../helpers/password');
class AuthController {
    static login(req, res) {
        res.render('auth/login')
    }
    static cekLogin(req, res) {
        const { email, password } = req.body
        User
            .findOne({
                where: {
                    email
                }
            })
            .then(data => {
                if (data) {
                    const isPasswordMatch = checkPassword(password, data.password)
                    if (isPasswordMatch) {
                        req.session.isLogin = true
                        req.session.role = data.role
                        req.session.userId = data.id
                        if (data.role === 'admin') {
                            res.redirect('/admin')
                        } else if (data.role === 'user') {
                            res.redirect('/user')
                        }
                    } else {
                        res.redirect('/login')
                    }
                } else {
                    res.redirect('/login')
                }
            })
            .catch(err => {
                res.send(err)
            })
    }
    static register(req, res) {
        res.render('auth/register')
    }
    static addUser(req, res) {
        const { name, email, password, phone } = req.body
        User
            .create({
                name, email, password, phone
            })
            .then(_ => {
                res.redirect('/login')
            })
            .catch(err => {
                res.send(err)
            })
    }
    static logout(req, res) {
        req.session.isLogin = false
        req.session.role = null
        res.redirect('/login')
    }
}
module.exports = AuthController