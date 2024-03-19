"use strict"
const myExpress = require('express');
const app = myExpress();
const port = 3000;
const router=myExpress.Router();
const http=require('http')
require('./DB/mongoConnection');
const{routesInit}=require("./Routes/configRoutes");
const path=require('path');
const cors=require("cors");
const bodyParser=require("body-parser");
app.use(bodyParser());
app.use(cors());
// app.use(myExpress.json);
app.use(myExpress.static(path.join(__dirname,"public")));
console.log("iiiiiiii");
routesInit(app);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  


const server=http.createServer(app);
// server.listen(port);
// app.get('/', (req, res) => {
//   res.send('Hello, Node.js!');
// });
app.get("/",(req,res)=>{
    res.send("<html><h1>מחובר</h1></html>")
        })

// app.get("/", async(req,res) => {
 
//     let data = await UserModel.find({}).limit(20);
//     console.log(res.json(data));
  
 
// })