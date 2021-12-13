const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')

module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}, (jwt_payload, done) => {

    User.findOne({_id:jwt_payload._doc._id})
    .then(user => {
        if(user){
            return done(null, user)
        }else{
            return done(null, false)
        }
    })
    .catch(err =>{
        return done(err,false)
    })

}))

//ESTRATEGIA DE JWT
//primera parte: obtuvo el token de la request. 6,7,8
//9 jwt_payload desencripta mis datos 
//en caso de q sea o no un usuario va a ser distinto nuestro passport
//pass tiene q retornar siempre done() q es un metodo  q recibe 2 params
//primer parametro es un error si es q existe
//respaldar datos con BD, tengo q usar mi modelo & findOne p encontrar UNO
//14-si existe ese UNO, no hay error => null, 2do param user autenticado.
//17 error null porque no hubo error en el pedido, pero no se encontro el user: False
//error en comunicacion catch.