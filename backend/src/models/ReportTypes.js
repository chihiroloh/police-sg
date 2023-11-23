const mongoose = require("mongoose");

const ReportTypesSchema = new mongoose.Schema(
  {
    type: { type: String },
    sub_type: { type: String },
  },
  { collection: "reportTypes" }
);

module.exports = mongoose.model("ReportType", ReportTypesSchema);
