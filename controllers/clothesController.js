const { Clothes } = require('../models/index')

class Controller {
  
    static showClothes(req, res) {
      Clothes.findAll()
        .then( data => {
          res.render("listClothes", {data})
        })
        .catch(err => {
          res.send(err)
        })
    }

    static getAddClothes(req, res) {
      res.render('addClothes')
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
          res.redirect('/clothes')
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
          res.redirect("/clothes")
        })
        .catch((err) => {
          res.send(err)
        })
    }
}

module.exports = Controller