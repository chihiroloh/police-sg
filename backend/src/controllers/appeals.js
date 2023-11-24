const Appeals = require("../models/Appeals");
const AppealsModel = require("../models/Appeals");

const seedAppeals = async (req, res) => {
  try {
    await AppealsModel.deleteMany({});
    await AppealsModel.create(req.body);
    res.json({ status: "ok", msg: "appeals seeded successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ status: "error", msg: "error seeding appeals" });
  }
};

const getAllAppeals = async (req, res) => {
  try {
    const appeals = await AppealsModel.find();
    res.json(appeals);
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "ok", msg: "error retrieving appeals" });
  }
};

module.exports = { seedAppeals, getAllAppeals };
