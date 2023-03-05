const { Movie } = require('../models')

class Controller {
    static home(req, res) {
        res.render('login')
    }

    static movie(req, res) {
        let allData = {}
        Movie.findAll({})
            .then((data) => {
                allData.data = data
                return Movie.findAll({
                    where: {
                        location: 'slider'
                    }
                })
            })
            .then((slider) => {
                allData.slider = slider
                return Movie.findAll({
                    where: {
                        location: 'favorite'
                    }
                })
            })
            .then((fav) => {
                allData.fav = fav
                return Movie.findAll({
                    where: {
                        location: 'popular'
                    }
                })
            })
            .then((popular) => {
                allData.popular = popular
                return Movie.findAll({
                    where: {
                        location: 'top-10'
                    }
                })
            })
            .then((trending) => {
                allData.trending = trending
                res.render('movie', {
                    data: allData.data,
                    slider: allData.slider,
                    fav: allData.fav,
                    popular: allData.popular,
                    trending: allData.trending
                })
            })

            .catch((err) => {
                console.log(err)
                res.render(err)
            })
    }

    static detail(req, res) {
        const { id } = req.params
        Movie.findByPk(id, {})
            .then((data) => {
                res.render('detail', { data })
            })
            .catch((err) => {
                res.send(err)
                console.log(err)
            })
    }

    static form(req, res) {
        res.render('formLogin')
    }
}

module.exports = Controller