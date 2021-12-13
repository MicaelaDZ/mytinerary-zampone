const joi = require("joi")//libreria  para validaciones.

const validator = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email().min(4).trim().pattern(new RegExp('[a-zA-A]')).required().messages({
            'string.empty' : "This field is required",
            'string.min' : "This field must be at least 3 characters long"
        }),   
        password: joi.string().required().trim().min(8).messages({
            'string.empty': "The password is required",
            'string.min' : "The password need more than 8 characters"
        }),
        name: joi.string().trim().min(2).max(15).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            "string.empty": "Your Name is a required field",
            "string.min": "Your Name must have at least 2 characters",
            "string.max": "Your Name could have max. 15 characters",
            "string.pattern.base": "Your Name must contain only letters",
        }),
        lastName: joi.string().required().messages({
            "string.empty": "Your Name is a required field",
            "string.min": "Your Name must have at least 2 characters",
            "string.max": "Your Name could have max. 15 characters",
            "string.pattern.base": "Your Name must contain only letters",
        }),
        photo: joi.string(),
        country: joi.string(),
        google: joi.boolean(),
        
             
    })
    
    const validation = schema.validate(req.body, {abortEarly:false}) //true me devuelve el primer error q encuentra y no valida el resto, false devuelvearray de errores
   
    if(validation.error){
        res.json({success:false, response: validation.error.details})
    }else{
        next()
    }
}

module.exports = validator