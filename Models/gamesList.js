const mongoose = require("mongoose");
const Joi = require("joi");

let gamesListschema = new mongoose.Schema({
    
Id:Number,
GameCode:Number,
ClosetNumber:Number,
GameName:String,
GameTypeCode:Number,
Parts:Array,
AgeCode:Number,
CurrentStateOfGame:String,
PrintSticker:Boolean,
HaveComplementaryGame:Boolean,
Location:String,
IsAvailable:Boolean,
})
exports.GamesListModel = mongoose.model("GamesList",gamesListschema)

exports.validateGamesList = (_reqBody) => {
let joiSchema = Joi.object({
Id:Joi.number().min().max().required(),
GameCode:Joi.number().min().max().required(),
ClosetNumber:Joi.number().min().max().required(),
GameName:Joi.string().min(2).max(399).required(),
GameTypeCode:Joi.number().min().max().required(),
Parts:Joi.array().min(0).max(100).allow(null,""),
AgeCode:Joi.number().min(1).max(999).required(),
CurrentStateOfGame:Joi.string().min(2).max(400).allow(null,""),
PrintSticker:Joi.boolean().min().max().allow(null,""),
HaveComplementaryGame:Joi.boolean().min().max().required(),
Location:Joi.string().min().max(100).allow(null,""),
IsAvailable:Joi.boolean().min().max().required(),
})
return joiSchema.validate(_reqBody)
}