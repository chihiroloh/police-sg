const multer = require("multer");

const imageUpload = (req, res) => {
  // console.log(req.file);

  // try {
  //   const storage = multer.diskStorage({
  //     destination: function (req, file, cb) {
  //       cb(null, "./public");
  //     },
  //     filename: function (req, file, cb) {
  //       cb(null, Date.now() + file.originalname);
  //     },
  //   });

  // const storage = multer.diskStorage({
  //   destination: "./public",
  //   filename: (req, file, cb) => {
  //     cb(null, Date.now() + file.originalname);
  //   },
  // });

  // const upload = multer({
  //   storage: storage,
  //   limits: {
  //     fileSize: 1024 * 1024 * 10,
  //   },
  // });

  // upload.single("images");
  console.log(req.file);
  res.json({ status: "ok", msg: "image uploaded successfully" });
  // } catch (error) {
  //   console.log(error.message);
  //   res.status(400).json({ status: "error", msg: "image failed to upload" });
  // }

  // res.json({ done: "done" });
};

module.exports = imageUpload;
