const mongoose = require ('mongoose');

const bcrypt = require('bcryptjs');
const saltRounds = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type : String,
        required :true,
        trim : true
    },
    email:{
        type : String,
        required : true,
        trim : true
    },
    password:{
        type:String,
        required : true,
        trim : true

    }

});




// hash user password before saving into database
UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
    });
module.exports = mongoose.model('User' , UserSchema);