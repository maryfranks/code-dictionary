const express = require("express");
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

app.use(function(request, response, next) {

  console.log(`${request.method} request for ${request.url}`);
  next();

});

app.use(express.static("./public"));

app.listen(3000);

console.log("Express app running on port 3000...");

module.exports = app;
