const express = require("express");

const app = express();

app.use(express.static("./dist/personal-budget"));

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: "./dist/personal-budget/" });
});

app.listen(process.env.PORT || 8080, () => {
  console.log("heelo");
});
