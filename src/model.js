const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({

    name : { type: String, required: true },
    description : { type: String },
    price : { type: Number, required: true },
    stock : { type: Number, required: true, min: 0 },
    category : { type: String, required: true },
    author:{type: String, required:true},
    edition:{type:String, required:true}

  },

);

const BookModel = mongoose.model("products", BookSchema);
module.exports = BookModel;