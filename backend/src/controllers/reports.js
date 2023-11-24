const Reports = require("../models/Reports");
const ReportsModel = require("../models/Reports");

const getReportsByUserId = async (req, res) => {
  try {
    const reports = await ReportsModel.find({ submittedBy: req.params.userId });
    res.json(reports);
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ status: "error", msg: "error retrieving user reports" });
  }
};

const createUserReport = async (req, res) => {
  try {
    let newReport = req.body;

    const reports = await ReportsModel.find();
    const dateRef = new Date().toLocaleDateString().split("/").join("");
    const RefId =
      req.body.type === "Lost & Found"
        ? `B/${dateRef}/${reports.length + 1}`
        : `A/${dateRef}/${reports.length + 1}`;

    newReport = {
      ...newReport,
      RefId,
      submittedBy: req.params.userId,
    };
    await ReportsModel.create(newReport);
    res.json({ status: "ok", msg: "report created successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ status: "error", msg: "error creating report" });
  }
};

const createReportUpdate = async (req, res) => {
  try {
    const report = await ReportsModel.findById(req.params.id); // Report Id
    report.updates.push(req.body);
    await report.save();
    res.json({ status: "ok", msg: "report update created successfully" });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ status: "error", msg: "error creating report update" });
  }
};

const updateReportStatus = async (req, res) => {
  try {
    await ReportsModel.findByIdAndUpdate(req.params.id, {
      status: req.body.status,
    });
    res.json({ status: "ok", msg: "report status updated successfully" });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ status: "error", msg: "error updating report status" });
  }
};

module.exports = {
  getReportsByUserId,
  createUserReport,
  createReportUpdate,
  updateReportStatus,
};