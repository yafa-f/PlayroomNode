const express = require("express");
const { FineModel, validateTipesOfGame } = require('../Models/fines');
const router = express.Router();

router.get("/", async(req,res) => {
  try{
    let data = await FineModel.find({}).limit(20);
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

router.post("/", async(req,res) => {
  // let validBody = validateGamesList(req.body);
  // if(validBody.error) {
  //   return res.status(400).json(validBody.error.details);
  // }
  try {
    let fines = new FineModel(req.body);
    await fines.save();
    res.json(fines)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})



module.exports = router;