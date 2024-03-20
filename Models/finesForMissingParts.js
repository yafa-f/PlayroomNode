const mongoose = require("mongoose");
const Joi = require("joi");

let finesForMissingPartsSchema = new mongoose.Schema({
ReturnID:Number,
FineCode:Number,
MissingPartsAount:Number,
UserCode:Number,
})
exports.FinesForMissingPartsModel = mongoose.model("FinesForMissingParts",finesForMissingPartsSchema)

exports.validateFinesForMissingParts = (_reqBody) => {
let joiSchema = Joi.object({
ReturnID:Joi.number().min(1).max().required(),
FineCode:Joi.number().min(1).max(999).required(),
MissingPartsAount:Joi.number().min(1).max(999).required(),
UserCode:Joi.number().min(1).max().required(),
})
return joiSchema.validate(_reqBody)
}