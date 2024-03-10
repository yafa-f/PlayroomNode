const myExpress = require('express');
const app = myExpress();
const port = 3000;
const http=require('http')
const{routesInit}=require("./Routes/configRoutes");
require('./DB/mongoConnection');
const path=require('path');
const cors=require("cors");
const bodyParser=require("body-parser");
app.use(bodyParser());
app.use(cors());
app.use(myExpress.json);
app.use(myExpress.static(path.join(__dirname,"public")))
routesInit(app);
// app.get('/', (req, res) => {
//   res.send('Hello, Node.js!');
// });
const server=http.createServer(app);
server.listen(port);
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// app.get("/", async(req,res) => {
 
//     let data = await UserModel.find({}).limit(20);
//     console.log(res.json(data));
  
 
// })