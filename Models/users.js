const mongoose = require("mongoose");
// const Joi = require("joi");

 usersschema = new mongoose.Schema({
    
userCode:String,
userName:String,
cellphone:String,
phone:String,
})
exports.UserModel = mongoose.model("Users",usersschema)

exports.validateUser = (_reqBody) => {
let joiSchema = Joi.object({
userCode:Joi.string().min().max().required(),
userName:Joi.string().min(2).max(400).required(),
cellphone:Joi.string().min(2).max(400).allow(null,""),
phone:Joi.string().min(2).max(400).required(),
})
return joiSchema.validate(_reqBody)
}