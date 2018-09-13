var express = require("express");
var bodyParser = require("body-parser")
var path = require("path");

var app = express();
var port = process.env.port || 8080

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.send("Friend Finder App")
})


app.listen(port, function (req, res) {
    console.log(`Server is up and running on port ${port}`)
})