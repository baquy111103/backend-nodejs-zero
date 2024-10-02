const connection = require('../config/database');


const getHomepage = (req, res) => {

    return res.render('home.ejs')
}
const getUser = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomepage,
    getUser
}