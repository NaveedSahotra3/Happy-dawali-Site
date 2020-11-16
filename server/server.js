let express = require('express');
let bd = require('body-parser');
let fs = require('fs');

let cors = require('cors');
let myApp = express();
myApp.use(bd.json());
let User = require('./models/user');
const { json } = require('body-parser');
require('./models/db')







myApp.post('/signup', (req, res, next) => {

    console.log(req.body)

    let newUser = new User({
        name: req.body.name,
        message: req.body.message,

    })

    newUser.save().then((item) => {
        console.log(item)
        res.json({ success: true, item });
    })

})


myApp.get('/users/:id', async function (req, res) {
    let newUsers = await User.findOne({_id: req.params.id})
    res.json(newUsers);
})




// myApp.use(express.static('./server.js'));



myApp.listen(process.env.PORT || 6070, () => {

    console.log('Now I am chaling');

});
