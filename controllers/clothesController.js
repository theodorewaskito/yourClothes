const { Clothes, UserClothes, User } = require('../models/index')

class clothesController {
  
    static showClothes(req, res) {
      Clothes.findAll()
        .then(data => {
          res.render("dashboard/listClothes.ejs", {data})
        })
        .catch(err => {
          res.send(err)
        })
    }

    static getAddClothes(req, res) {
      res.render('dashboard/addClothes.ejs')
    } 

    static postAddClothes(req, res) {
      let data = {
        name: req.body.name,
        material: req.body.material,
        color: req.body.color,
        price: req.body.price,
        stock: req.body.stock
      }
      Clothes.create(data)
        .then(() => {
          res.redirect('/admin/product')
        })
        .catch((err) => {
          res.send(err)
        })
    } 

    static getEditClothes(req, res) {
      // 
      let id = req.params.id
      Clothes.findByPk(id)
        .then((data) => {
          res.render("dashboard/editClothes.ejs", {data})
        })
        .catch((err) => {
          res.send(err)
        })
    }

    static postEditClothes(req, res) {
      let data = {
        name: req.body.name,
        material: req.body.material,
        color: req.body.color,
        price: req.body.price,
        stock: req.body.stock,
        image: req.body.image
      }
      let id = req.params.id
      Clothes.update( data, {
        where: {
          id: id
        }
      })
        .then(() => {
          res.redirect('/admin/product')
        })
        .catch((err) => {
          res.send(err)
        })
    }

    static deleteClothes(req, res) {
      let id = req.params.id
      Clothes.destroy({
        where: {
          id: id
        }
      })
        .then(() => {
          res.redirect("/admin/product")
        })
        .catch((err) => {
          res.send(err)
        })
    }

    static userPurchase(req, res) {
      let result = {}
      UserClothes.findAll()
        .then((data) => {
          res.send(data)
        })
        .catch((err) => {
          res.send(err)
        })
    }
}

module.exports = clothesController