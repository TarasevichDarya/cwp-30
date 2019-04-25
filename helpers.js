const jwt = require('jsonwebtoken');

function verifyToken(token){
    try{
        const user = jwt.verify(token, 'secret');
        console.log('user '+user);
        return user;
    }
    catch(err){
        return false;
    }
}

module.exports = {
    verifyToken,
}