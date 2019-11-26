// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const SiteInfoSchema = new Schema(
  {
    about: String,
    contactMessage: String,
    contactEmail: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("SiteInfo", SiteInfoSchema);