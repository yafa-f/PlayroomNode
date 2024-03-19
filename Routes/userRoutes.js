const express = require("express");
const { UserModel, validateUser } = require("../Models/users");
const router = express.Router();

router.get("/", async(req,res) => {
  console.log("ghjjkk");
  try{
    let data = await UserModel.find({});
    res.write(json(data));
  }
  catch(err){
    console.log(err);
    // res.status(502).json({err})
  }
})

// router.get("/single/:id", async(req,res) => {
//   try{
//     const id = req.params.id
//     let data = await UserModel.findOne({_id:id});
//     res.json(data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(502).json({err})
//   }
// })

router.post("/", async(req,res) => {
  let validBody = validateUser(req.body);
  if(validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let User = new UserModel(req.body);
    await User.save();
    res.json(User)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

// router.put("/:id", async(req,res) => {
//   let validBody = validateUser(req.body);
//   if(validBody.error) {
//     return res.status(400).json(validBody.error.details);
//   }
//   try {
//    let id = req.params.id;
//    let data = await UserModel.updateOne({_id:id},req.body);
//   res.json(data)
//   }
//   catch(err) {
//     console.log(err);
//     res.status(502).json( {err})
//   }
// })

// router.delete("/:id", async(req,res) => {
//   try {
//     let id = req.params.id;
//     let data = await UserModel.deleteOne({_id:id} );
//     res.json(data)
//   }
//   catch(err) {
//     console.log(err);
//     res.status(502).json( {err})
//   }
// })

module.exports = router;