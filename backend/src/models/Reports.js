const mongoose = require("mongoose");

const UpdatesSchema = new mongoose.Schema({
  type: { type: String, enum: ["receipt", "newLeads", "transfer", "close"] },
  io: { type: String },
  branch: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const ReportsSchema = new mongoose.Schema(
  {
    RefId: { type: String },
    type: { type: String, required: true },
    primaryInfo: { type: Map, of: String, required: true },
    secondaryInfo: { type: String },
    media: {
      mediaURL1: String,
      mediaURL2: String,
      mediaURL3: String,
    },
    AddInfo: { type: String },
    dateOccurred: { type: Date, required: true },
    timeOccurred: { type: String, required: true },
    locationOccurred: { type: String },
    submittedBy: { type: String, /*mongoose.ObjectId*/ required: true },
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
