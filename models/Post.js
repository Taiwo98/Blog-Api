const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);