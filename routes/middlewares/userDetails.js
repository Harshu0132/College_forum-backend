const jwt = require('jsonwebtoken');

module.exports = function verifyToken(req, res){
    if(!req.headers.authorization){
        return res.status(401).send('unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('unauthorized request')
    }
    let payload = jwt.verify(token, 'userAuth')
    console.log(payload);
    if(!payload){
        return res.status(401).send('unauthorized request')
    }
    // req.id = payload.id
    console.log(payload);
    res.send({
        id: payload.id,
        role: payload.role
    })
}