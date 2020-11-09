let express = require('express');
let bd = require('body-parser');
let fs = require('fs');

let cors = require('cors');
let myApp = express();
myApp.use(bd.json());
let User = require('./models/user');
require ('./models/db')







myApp.post('/signup', (req, res, next) => {

    console.log(req.body)

    let newUser = new User({
        name: req.body.Name,
        message: req.body.message,

    })

    newUser.save().then((item) => {
        console.log(item)
        console.log("working");
    })
    res.json({ success: true });

})







// myApp.use(express.static('./server.js'));



myApp.listen(process.env.PORT || 6070, () => {

    console.log('Now I am chaling');

});
