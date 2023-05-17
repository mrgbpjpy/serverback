const mongoose = require('mongoose');

const postSchema = {
    title: String,
    Description: String
}

const Post = mongoose.model("Post", postSchema);

module.exports = Post;