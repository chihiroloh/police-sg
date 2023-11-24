const mongoose = require("mongoose");

const AppealsSchema = new mongoose.Schema(
  {
    name: String,
    type: { type: String, enum: ["NOK", "Information", "Witnesses"] },
    imageURL: String,
    contents: String,
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "appeals" }
);

module.exports = mongoose.model("Appeal", AppealsSchema);
