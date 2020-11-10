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
        name: req.body.Name,
        message: req.body.message,

    })

    newUser.save().then((item) => {
        console.log(item)
        console.log("working");
    })
    res.json({ success: true, newUser });

})


myApp.get('/users', function (req, res) {
    let newUsers = User.find((item) => {
        return item
    })
    res.json(User);
    console.log(newUsers.name)
    return newUsers
    // User.find({}, function (err, userList) {
    //     res.json({
    //         userList
    //     })
    //     console.log(userList)
    //     console.log(json(userList.message))
    //     console.log(json(userList._id))


    // })
})




// myApp.use(express.static('./server.js'));



myApp.listen(process.env.PORT || 6070, () => {

    console.log('Now I am chaling');

});
