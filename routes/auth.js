const express = require('express');

const router = express.Router();


const tokenservice = require('../jwt');


//localhost:4000/auth/login

router.get('/login',(req,res)=>{
    const token = tokenservice.generateToken({user:"aman",id:200});
    res.send({token});
})

module.exports = router;

