const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

var codeTerms = [
  {
    term: "closure",
    defined: "A function within a function that can be stored as a variable"
  },
  {
    term: "==",
    defined: "Equality with coersion"
  },
  {
    term: "callback",
    defined: "Executable code passed as an argument to another piece of code"
  },
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(request, response, next) {

  console.log(`${request.method} request for ${request.url} - ${JSON.stringify(request.body)}`);
  next();

});

app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api", function(request, response) {

  response.json(codeTerms);

});

app.post("/dictionary-api", function(request, response) {

  codeTerms.push(request.body);
  response.json(codeTerms);

});

app.listen(3000);

console.log("Express app running on port 3000...");

module.exports = app;
