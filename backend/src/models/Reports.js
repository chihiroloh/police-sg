const mongoose = require("mongoose");

const UpdatesSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["receipt", "newLeads", "transfer", "close"],
    required: true,
  },
  io: { type: String, required: true },
  branch: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ReportsSchema = new mongoose.Schema(
  {
    refId: { type: String },
    type: { type: String, required: true },
    primaryInfo: { type: Map, of: String, required: true },
    secondaryInfo: { type: String },
    media: {
      mediaURL1: String,
      mediaURL2: String,
      mediaURL3: String,
    },
    addInfo: { type: String },
    dateOccurred: { type: Date, required: true },
    timeOccurred: { type: String, required: true },
    locationOccurred: { type: String, required: true },
    submittedBy: { type: mongoose.ObjectId, required: true },
    submmitedOn: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["Pending", "Active", "Completed"],
      default: "Pending",
    },
    updates: [UpdatesSchema],
  },
  { collection: "reports" }
);

module.exports = mongoose.model("Report", ReportsSchema);
