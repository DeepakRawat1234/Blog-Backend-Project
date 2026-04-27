const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { createPost, getPosts, deletePost } = require("../controllers/postController");

router.post("/", auth, createPost);
router.get("/", getPosts);
router.delete("/:id", deletePost);

module.exports = router;