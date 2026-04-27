const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const { title, content } = req.body;

  const post = await Post.create({
    title,
    content,
    user: req.user
  });

  res.json("Post created Successfully");
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("user", "name");

  res.json(posts);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);


  await post.deleteOne();

  res.json({ msg: "Deleted" });
};