// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const ProductSchema = new Schema(
  {
    itemName: String,
    imageUrl: Array,
    price: Number,
    description: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Product", ProductSchema);