const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://yafa-f:y029990694@cluster0.nohaw4m.mongodb.net/');

  console.log("mongo connect");
}