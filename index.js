const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "apnacollege",
    content: "I love coding!",
  },
  {
    id: uuidv4(),
    username: "mohit_yadav",
    content: "Hard work is important to achieve success",
  },
  {
    id: uuidv4(),
    username: "nishant_verma",
    content: "I got selected for my first internship!",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  const { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  // console.log("Requested id:", id);
  const post = posts.find((p) => p.id === id);
  // console.log("Found post:", post);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  let newContent = req.body.content;
  // console.log(newContent);
  const post = posts.find((p) => p.id === id);
  post.content = newContent;
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);

  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  posts = posts.filter((p) => p.id != id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}/posts`);
});
