

/*
function AuthenticationMiddleware(req,res,next){

const { token } = require("morgan");

    console.log("Inside middleware")

   // const token = req.headers;

   //headers se token ko destructure se le len

   const { authorization } = req.headers;

   //abhi koi bhi key dalkar verify kar lega

   if(!authorization){
    res.send("please take your token");
   }

   console.log(authorization);
    next();
}

*/







//generate token

const jwt = require('../jwt');

function AuthenticationMiddleware(req, res, next) {

    console.log("Inside middleware")



    const { authorization } = req.headers;



    if (!authorization) {
        res.send("please take your token");
    }

    const payload = jwt.verify(authorization);
   // req.permissions = payload.permissions;

   req.userContext = {...payload}

    console.log(payload);

    next();
}

module.exports = AuthenticationMiddleware;