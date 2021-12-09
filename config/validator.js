const joi = require("joi")

const validator = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().max(25).min(4).trim().pattern(new RegExp('[a-zA-A]')).required().messages({
            'string.empty' : "This field is required",
            'string.min' : "This field must be at least 3 characters long"
        }),   
        password: joi.string().required().trim().min(8).max(20).messages({
            'string.empty': "The password is required",
            'string.min' : "The password need more than 8 characters"
        }),
        name: joi.string(),
        lastName: joi.string(),
        photo: joi.string(),
        country: joi.string()
             
    })
    
    const validation = schema.validate(req.body, {abortEarly:false}) //true me devuelve el primer error q encuentra y no valida el resto, false array de errores

    if(validation.error){
        res.json({success:false, response: validation.error.details})
    }else{
        next()
    }
}

module.exports = validator