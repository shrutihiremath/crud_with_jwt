const userModel = require ('../models/user');

const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');


exports.createUser = (req,res,next) => {
    userModel.create({ name: req.body.name, 
        email: req.body.email, 
        password: req.body.password} , (err, result) => {
        if(err) throw err;
        res.json({success : true , message : 'user added successfully', data: null});
    })
};

exports.authenticate = (req,res,next) => {
    userModel.findOne({email :req.body.email}, (err , result) => {
        if (err) {
            res.json({success:false, message: "invalid email!!!", data:null})
        }
        else{
            if(bcrypt.compareSync (req.body.password, result.password)){
                const token = jwt.sign({userId : result._id}, req.app.get('secretKey'),
                {expiresIn : '1h'});
                res.json({success:true, message: "user found, token sent!!!", 
                data:{user: result, token:token}});
            }else{
                res.json({success:false, message: "invalid password!!!", data:null});
            }
        }
    })
}