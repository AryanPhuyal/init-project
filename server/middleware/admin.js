const User = require('../modal/User');


const isAdmin = (req,res,next) =>{
    if(req.user.userType === 'admin') return next();
    return res.status(403).json({
        success:false,
        message:"Not authorizer to enter this url"
    })
}