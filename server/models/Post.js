const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const poseSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },
    title: {
      type: String,
      maxlength: 50,
    },
    content: {
      type: String,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", poseSchema);

module.exports = { Post };
