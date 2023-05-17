const express = require("express");
const router = express.Router();
const Post = require("../models/noteModel");

router.route("/create").post((req, res)=> {
    const title = req.body.title;
    const Description = req.body.Description;
    const newPost = new Post({
        title,
        Description
    });

    newPost.save();
})

router.get('/posts', async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) { // add error callback
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;