const express = require("express");
const asyncify = require("express-asyncify");
const postsCtrl = require("./posts.ctrl");

const posts = asyncify(express.Router()); 

posts.get("/", postsCtrl.list);
posts.post("/", postsCtrl.write);
posts.get("/:id", postsCtrl.checkObjectId, postsCtrl.read);
posts.delete("/:id", postsCtrl.checkObjectId, postsCtrl.remove);
posts.patch("/:id", postsCtrl.checkObjectId, postsCtrl.update);

module.exports = posts;