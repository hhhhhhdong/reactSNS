const express = require("express");
const router = express.Router();
const { User } = require("../models/User.js");
const { auth } = require("../middleware/auth.js");

router.post("/auth", auth, (req, res) => {
  res.status(200).json({
    logged: true,
    _id: req.user._id,
    email: req.user.email,
    name: req.user.name,
    token: req.user.token,
  });
});

router.post("/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userinfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다.",
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.status(400).json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
      }
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
          success: true,
          token: user.token,
        });
      });
    });
  });
});

router.post("/logout", (req, res) => {
  User.findOneAndUpdate({ _id: req.body._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ logged: false });
  });
});

router.post("/addpost", (req, res) => {
  User.findOneAndUpdate(
    { email: req.body.user },
    {
      $push: {
        post: {
          title: req.body.title,
          content: req.body.content,
          date: Date.now(),
        },
      },
    },
    { new: true },
    (err, userInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true, post: userInfo.post });
    }
  );
});

module.exports = router;
