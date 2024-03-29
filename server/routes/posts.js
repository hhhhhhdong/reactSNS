const express = require("express");
const router = express.Router();
const { Post } = require("../models/Post");

router.post("/", (req, res) => {
  const post = new Post(req.body);
  post.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.get("/posts", (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .exec((err, postInfo) => {
      if (err) return res.status(400).json({ err });
      return res.status(200).json({ success: true, postInfo });
    });
});

router.get("/myposts", (req, res) => {
  const myId = req.query.id;
  Post.find({ writer: myId })
    .sort({ createdAt: -1 })
    .exec((err, postInfo) => {
      if (err) return res.status(400).json({ err });
      return res.status(200).json({ success: true, postInfo });
    });
});

router.post("/likepost", (req, res) => {
  if (!req.body.Liked) {
    Post.findOneAndUpdate(
      { _id: req.body.postId },
      {
        $push: {
          liked: {
            postId: req.body.userId,
          },
        },
      },
      { new: true },
      (err, post) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ liked: true, count: post.liked.length });
      }
    );
  } else {
    Post.findOneAndUpdate(
      { _id: req.body.postId },
      {
        $pull: {
          liked: {
            postId: req.body.userId,
          },
        },
      },
      { new: true },
      (err, post) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ liked: false, count: post.liked.length });
      }
    );
  }
});

router.post("/postinfo", (req, res) => {
  Post.findOneAndUpdate(
    { _id: req.body.postId },
    {
      $push: {
        coments: {
          writerId: req.body.writerId,
          writerName: req.body.writerName,
          coment: req.body.coment,
        },
      },
    },
    { new: true },
    (err, post) => {
      if (err) return res.json({ success: false, err });
      return res
        .status(200)
        .json({
          writerId: req.body.writerId,
          writerName: req.body.writerName,
          coment: req.body.coment,
        });
    }
  );
});

module.exports = router;
