const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema( {
    "name":String,
     "price":Number,
     "authorID":{
        type:ObjectId,
        ref:"newAuthor"
     },
    "ratings":Number,
    publisherID:{
        type:ObjectId,
        ref:"newPublisher"
    }
}, { timestamps: true });

module.exports = mongoose.model("newBook", newBookSchema)