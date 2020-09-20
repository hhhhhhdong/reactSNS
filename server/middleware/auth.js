const { User } = require("../models/User.js");
let auth = (req, res, next) => {
  let token = req.body.token;
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ logged: false });

    req.user = user;
    next();
  });
};

module.exports = { auth };
