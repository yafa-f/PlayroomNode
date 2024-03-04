const mongoose = require("mongoose");
const Joi = require("joi");

let forAgeSchema = new mongoose.Schema({
gameTypeCode:Number,
gameTipeName:String,
stickerColor:String,
})
exports.ForAgesModel = mongoose.model("ForAgess",forAgeSchema)

exports.validateForAges = (_reqBody) => {
let joiSchema = Joi.object({
gameTypeCode:Joi.number().min(1).max().required(),
gameTipeName:Joi.string().min(2).max(400).required(),
stickerColor:Joi.string().min(2).max(400).required(),
})
return joiSchema.validate(_reqBody)
}