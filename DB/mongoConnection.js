const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://yafa-f:y029990694@cluster0.nohaw4m.mongodb.net');

  console.log("mongo connect");
}
var db=mongoose.connection;
db.on('open',()=>{
  console.log("opppppppppppennnnnnnnnnnnnnnn");
})
exports.default=mongoose;