const IWitnessModel = require("../models/iWitness.js");

const createIWitness = async (req, res) => {
  try {
    let newReport = req.body;

    const reports = await IWitnessModel.find();
    const dateRef = new Date().toLocaleDateString().split("/").join("");
    const RefId = `C/${dateRef}/${reports.length + 1}`;

    newReport = {
      ...newReport,
      RefId,
      submittedBy: req.params.userId,
    };
    await IWitnessModel.create(newReport);
    res.json({ status: "ok", msg: "report created successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", msg: "error creating iWitness report" });
  }
};

module.exports = createIWitness;
