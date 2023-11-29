const multer = require("multer");

const imageUpload = (req, res) => {
  res.json({
    status: "ok",
    msg: "image uploaded successfully",
    path: req.file.path,
  });
};

module.exports = imageUpload;
