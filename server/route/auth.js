const router = require('express').Router()
const {signup,login} = require('../controller/auth')
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware,(req,res)=>{
    res.send('Hello')
})
router.post('/login',login)
router.post('/signup',signup)
module.exports = router;
