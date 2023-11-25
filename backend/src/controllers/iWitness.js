const IWitnessModel = require("../models/IWitness.js");

const createIWitness = async (req, res) => {
  try {
    let newReport = req.body;

    const reports = await IWitnessModel.find();
    const dateRef = new Date().toLocaleDateString().split("/").join("");
    const refId = `C/${dateRef}/${reports.length + 1}`;

    newReport = {
      ...newReport,
      refId,
      submittedBy: req.params.userId,
    };
    await IWitnessModel.create(newReport);
    res.json({ status: "ok", msg: "report created successfully", refId });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", msg: "error creating iWitness report" });
  }
};

module.exports = createIWitness;
