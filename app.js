const express = require("express");
const app = express();

app.use(function(request, response, next) {

  console.log(`${request.method} request for ${request.url}`);
  next();
  
});

app.use(express.static("./public"));

app.listen(3000);

console.log("Express app running on port 3000...");

module.exports = app;
