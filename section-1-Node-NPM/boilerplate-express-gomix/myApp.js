let express = require('express');
let app = express();

console.log("Hello World")

app.use('/public',express.static(path.join(__dirname, 'public/style.css')));

app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});































 module.exports = app;
