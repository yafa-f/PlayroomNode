const mongoose = require("mongoose");
const Joi = require("joi");

let fineSchema = new mongoose.Schema({
FineCode:Number,
Type:String,
PriceOfFine:String,
})
exports.FineModel = mongoose.model("Fines",fineSchema)

exports.validateFine = (_reqBody) => {
let joiSchema = Joi.object({
FineCode:Joi.number().min(1).max(999).required(),
Type:Joi.string().min(2).max(400).required(),
PriceOfFine:Joi.string().min(2).max(400).required(),
})
return joiSchema.validate(_reqBody)
}