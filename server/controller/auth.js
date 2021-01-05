const User = require('../modal/User');
const jwt = require('jsonwebtoken')


exports.signup = async (req, res) => {
    const {email, password, name} = req.body;
    try {

        const checkUserExists = await User.find({email: email})
        if (checkUserExists.length > 0) {
            return res.json({success: false, error: "User already exists"})
        }
        const user = new User({
            email, password, name
        })
        await user.save();
        res.json({
            success: true,
            user: user
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({success: false, message: "something went wrong"})
    }

}

exports.login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email: email});
        if (user) {
            const match = user.comparePassword(password);
            if (match) {
                const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,)
                return res.json({success: true, token: token})
            }
            return res.json({success: false, message: "Email or password invalid"})
        } else return res.status(400).json({success: false, message: "User not exists"})
    }catch(err){
        res.status(500).json({success:false,message:"Something went wrong"})
    }
}