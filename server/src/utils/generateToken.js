const jwt = require('jsonwebtoken')

function generateToken(params = {}){
    return jwt.sign(params, process.env.APP_SECRET)
}

module.exports = generateToken