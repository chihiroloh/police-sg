const mongoose = require("mongoose");

const IWitnessSchema = new mongoose.Schema(
  {
    refId: { type: String },
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
    addInfo: { type: String },
    dateOccurred: { type: Date },
    timeOccurred: { type: String },
    locationOccurred: { type: String },
    submittedBy: { type: mongoose.ObjectId, required: true },
    submmitedOn: { type: Date, default: Date.now },
  },
  { collection: "iWitness" }
);

module.exports = mongoose.model("IWitness", IWitnessSchema);
