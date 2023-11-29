require("dotenv").config();

const express = require("express");
const connectDB = require("./src/db/db");
const cors = require("cors");
const helmet = require("helmet");
const auth = require("./src/routers/auth");
const reportTypes = require("./src/routers/reportTypes");
const reports = require("./src/routers/reports");
const appeals = require("./src/routers/appeals");
const iWitness = require("./src/routers/iWitness");
const imageUpload = require("./src/routers/imageUpload");
const path = require("path");

connectDB();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", auth);

app.use("/report_types", reportTypes);

app.use("/api/reports", reports);
app.use("/api/appeals", appeals);
app.use("/api/iWitness", iWitness);
app.use("/api/upload", imageUpload);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
