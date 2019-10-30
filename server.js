const express = require("express");
const fs = require("fs-extra");

const app = express();
const port = process.env.PORT;
app.use(express.urlencoded({extended: true}));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");

  /* this is way faster than doing
  const fs = require("fs");
  fs.readFile("./index.html", "utf-8", (err, data) => response.send(data));
  */
});

app.get("/newsletter", (request, response) => {
  response.sendFile(__dirname + "/newsletter.html");
});

app.post("/register", (request, response) => {
  const newEmail = request.body.email;

  const registrationListFileName = "data/registrationList.txt";
  fs.ensureFile(registrationListFileName)
    .then(() => fs.appendFile(registrationListFileName, `${newEmail}\n`));

  response.send("request received, thank you");
});

// static file serving, see: https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

app.listen(port, () => console.log("server listening on port 3000"));
