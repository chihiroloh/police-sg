const ReportTypesModel = require("../models/ReportTypes");

const getAllReportTypes = async (req, res) => {
  try {
    const types = await ReportTypesModel.find();
    res.json(types);
  } catch (error) {
    console.log(error.message);
    res.json({ status: "ok", msg: "error retrieving report types" });
  }
};

module.exports = getAllReportTypes;
