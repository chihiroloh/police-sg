const mongoose = require("mongoose");

const iWitnessSchema = new mongoose.Schema(
  {
    RefId: { type: String },
    type: {
      type: String,
      required: true,
      enum: ["witness", "NOK", "missing persons"],
    },
    primaryInfo: { type: Map, of: String, required: true },
    secondaryInfo: { type: String },
    media: {
      mediaURL1: String,
      mediaURL2: String,
      mediaURL3: String,
    },
    AddInfo: { type: String },
    dateOccurred: { type: Date },
    timeOccurred: { type: String },
    locationOccurred: { type: String },
    submittedBy: { type: mongoose.ObjectId },
    submmitedOn: { type: Date, default: Date.now },
  },
  { collection: "iWitness" }
);

module.exports = mongoose.model("I-Witness", iWitnessSchema);