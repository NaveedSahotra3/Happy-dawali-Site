
let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: String,
    message: String
   
});

 
let User = mongoose.model('user', userSchema);

module.exports = User;
