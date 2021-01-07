const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        default:'user',
        required:true,
    }
})

userSchema.pre('save',function(next){
    this._doc.password= bcrypt.hashSync(this._doc.password,12)
    next();
})

userSchema.methods.comparePassword = function(cpassword){
    const match = bcrypt.compareSync(cpassword,this.password)
    return match;
}



module.exports = mongoose.model('User',userSchema)