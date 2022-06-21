const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Get Back All the posts

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit the Post
router.post("/", async (req, res) => {
  // console.log(req.body);

  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});
//get the specefic Post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post
router.delete("/:postId", async (req, res) => {
  try {
    const deletePost = await Post.deleteOne({ _id: req.params.postId });
    res.json(deletePost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: { title: req.body.title },
      }
    );
    res.json(updatePost);
  } catch (err) {}
});

module.exports = router;
