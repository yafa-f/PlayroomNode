const mongoose = require("mongoose");
const Joi = require("joi");

let tipesOfGamesschema = new mongoose.Schema({
gameTypeCode:String,
gameTipeName:String,
stickerColor:String,
})
exports.TipesOfGameModel = mongoose.model("TipesOfGames",tipesOfGamesschema)

exports.validateTipesOfGame = (_reqBody) => {
let joiSchema = Joi.object({
gameTypeCode:Joi.string().min(1).max(400).required(),
gameTipeName:Joi.string().min(2).max(400).required(),
stickerColor:Joi.string().min(2).max(400).allow(null,""),
})
return joiSchema.validate(_reqBody)
}