const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        require : true,
        unique : true,
        trim : true
    },
    email : {
        type : String,
        require : true,
        unique : true,
        trim : true,
        lowercase : true
    },
    password : {
        type : String,
        require : true
    },
    role : {
        type : String,
        enum : ['user', 'admin'], // only alow 'user' or 'admin' roles
        default : 'user'
    }
})

module.exports = mongoose.model('User', UserSchema)