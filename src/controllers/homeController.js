const connection = require('../config/database');
const { getAllUsers } = require('../service/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}
const getUser = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    // let { email, name, city } = req.body;

    // connection.query(
    //     `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         if (err) {
    //             console.error('Error inserting data:', err.message);
    //             return res.status(500).send('Database error');
    //         }

    //         console.log('Results:', results);
    //         res.send('Created user succeed!');
    //     }
    // );

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city],
    );

    res.send('Created user succeed !')

}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}


module.exports = {
    getHomepage,
    getUser,
    postCreateUser,
    getCreatePage
}