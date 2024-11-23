const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
      
    },
    email:{
        type:String,
     
    },
    createdAt:{
        type : String,
        default : Date.now
    }
});

module.exports = mongoose.model('User', userSchema); 