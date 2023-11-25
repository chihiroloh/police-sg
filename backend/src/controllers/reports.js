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
    const refId =
      req.body.type === "Lost & Found"
        ? `B/${dateRef}/${reports.length + 1}`
        : `A/${dateRef}/${reports.length + 1}`;

    newReport = {
      ...newReport,
      refId,
      submittedBy: req.params.userId,
    };
    await ReportsModel.create(newReport);
    res.json({ status: "ok", msg: "report created successfully", refId });
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

const deleteReportById = async (req, res) => {
  try {
    await ReportsModel.findByIdAndDelete(req.params.id);
    res.json({ status: "ok", msg: "report deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ status: "ok", msg: "error deleting report" });
  }
};

const deleteReportUpdate = async (req, res) => {
  try {
    const report = await ReportsModel.findById(req.params.id);
    await report.updates.id(req.body.id).deleteOne();
    await report.save();
    res.json({ status: "ok", msg: "update deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ status: "error", msg: "error deleting report update" });
  }
};

module.exports = {
  getReportsByUserId,
  createUserReport,
  createReportUpdate,
  updateReportStatus,
  deleteReportById,
  deleteReportUpdate,
};
