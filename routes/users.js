const express = require('express');

const router = express.Router();



//query parameter

router.get('/', function (req, res, next) {

  console.log("querry parameter", req.query);
  res.send("response send ");
})


//path parameter
/*
router.get('/:id',function(req,res,next){

  console.log("path parameter",req.params);
    res.send("response send helllo");
    console.log(req.params);
})

*/


///by header 


router.get('/:id', function (req, res, next) {

  console.log("path parameter", req.params);
 // console.log("path parameter", req.userContext);
  console.log("header parameter", req.headers);
  res.send("response name send ");
  console.log(req.params);

});

//by body parameter 

router.post('/',(req,res,next)=>{
  console.log("body", req.body)
 // console.log("body", req.userContext)
  res.send(req.body)
})



router.get('/address', function (req, res, next) {
  res.send("user address");
})

module.exports = router;