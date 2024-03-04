const myExpress = require('express');
const app = myExpress();
const port = 3000;
const cors=require("cors");
const bodyParser=require("body-parser");
app.use(bodyParser());
app.use(cors({
    origin:'*'
}));
app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
