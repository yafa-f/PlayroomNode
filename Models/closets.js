const mongoose = require("mongoose");
const Joi = require("joi");

let closetschema = new mongoose.Schema({
closetCode:Number,
IsKlinait:Boolean,
emptyPlace:Array,
closetLocation:String,
})
exports.ClosetModel = mongoose.model("Closets",closetschema)

exports.validateCloset = (_reqBody) => {
let joiSchema = Joi.object({
closetCode:Joi.number().min(1).max(999).required(),
IsKlinait:Joi.boolean().min(2).max(400).required(),
emptyPlace:Joi.array().min(1).max(99).required(),
closetLocation:Joi.string().min(2).max(400).allow(null,""),
})
return joiSchema.validate(_reqBody)
}