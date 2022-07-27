let express = require('express');
let app = express();
const path=require("path");
const dotenv=require("dotenv").config();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
console.log("Hello World")

app.use(express.static(__dirname + '/public'))
app.use("/public",express.static(__dirname + '/public'))
app.get("/", function(req, res) {
res.sendFile("/views/index.html"  , { root : __dirname})
});


// app.get("/json", (req, res) => {
//   if(process.env.MESSAGE_STYLE == "uppercase")
//     {
//         res.json({
//         message: "HELLO JSON"
//         });
//     }
//     else
//     {
//         res.json({
//         message: "Hello json"
//         });
//     }
// });
// app.use((req, res, next) => {

//  let string = `${req.method} ${req.path} - ${req.ip}`
//  console.log(string) 
   
//   next();

// });
app.get("/:word/echo",function(req,res){
    var word =req.params.word;
    res.json({
        echo: word
    });
});
var delayInMilliseconds = 1000; //1 second

app.get('/now', (req, res, next) => {
     req.time = new Date().toString();
     next()
}, (req, res) => {
setTimeout(function() {
  //your code to be executed after 1 second
    res.json({
      'time': req.time
    })
}, delayInMilliseconds);
});



app.get("/name",function(req,res,next){
    var firstname=req.query.first;
    var lastname=req.query.last;
    res.json
    ({ 
        name: `${firstname} ${lastname}`
    });
});


app.post("/name",function(req,res,next){
    var firstname =req.body.first;
    var lastname = req.body.last;
    res.json({
        name: `${firstname} ${lastname}`
    })
});























 module.exports = app;
