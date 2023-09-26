import express from "express";

const app = express();
const port = 4000;
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/60-Steps-to-a-Successful-site", (req, res) => {
  res.render("60 Steps to a Successful site.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});