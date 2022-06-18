let express = require('express');
let app = express();
const path=require("path");
const dotenv=require("dotenv").config();
console.log("Hello World")

app.use('/public',express.static(path.join(__dirname, 'public/style.css')));

app.get("/json", (req, res) => {
  if(process.env.MESSAGE_STYLE == "uppercase")
    {
        res.json({
        message: "HELLO JSON"
        });
    }
    else
    {
        res.json({
        message: "Hello json"
        });
    }
});































 module.exports = app;
