const mongoose = require("mongoose");
const Joi = require("joi");

let takingOrReturningschema = new mongoose.Schema({
    
IsMissingParts:Boolean,
ReturnDate:{
type:Date , default:Date.now
},
TakingDate:{
type:Date , default:Date.now
},
GameCode:Number,
UserCode:Number,
ReturnID:Number,
})
exports.TakingOrReturningModel = mongoose.model("TakingOrReturning",takingOrReturningschema)

exports.validateTakingOrReturning = (_reqBody) => {
let joiSchema = Joi.object({
IsMissingParts:Joi.boolean().min(1).max(400).required(),
ReturnDate:Joi.date().min(0).max(400).required(),
TakingDate:Joi.date().min(0).max(400).allow(null,""),
GameCode:Joi.number().min().max().required(),
UserCode:Joi.number().min(1).max().required(),
ReturnID:Joi.number().min(1).max().required(),
})
return joiSchema.validate(_reqBody)
}