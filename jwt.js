const jwt = require('jsonwebtoken');


const privateKey ="kfalkjflksjflkjf9843285dkjfhsdkjfh98438dskjfhdskjfh";

const generateToken =(payload)=>{
    const token = jwt.sign(payload,privateKey);
    return token;

}


const verify =(token)=>{
    const payload = jwt.verify(token,privateKey);
    return payload;

}

module.exports = {
    generateToken,
    verify
}

