const express = require("express");
const { ClosetModel, validateCloset } = require('../Models/closets');
const router = express.Router();

router.get("/", async(req,res) => {
  try{
    let data = await ClosetModel.find({});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

router.get("/single/:id", async(req,res) => {
  try{
    const id = req.params.id
    let data = await ClosetModel.findOne({_id:id});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

router.post("/", async(req,res) => {
  let validBody = validateCloset(req.body);
  if(validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let Closet = new ClosetModel(req.body);
    await Closet.save();
    res.json(Closet)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

router.put("/:id", async(req,res) => {
  let validBody = validateCloset(req.body);
  if(validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
   let id = req.params.id;
   let data = await ClosetModel.updateOne({_id:id},req.body);
  res.json(data)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

router.delete("/:id", async(req,res) => {
  try {
    let id = req.params.id;
    let data = await ClosetModel.deleteOne({_id:id} );
    res.json(data)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

module.exports = router;