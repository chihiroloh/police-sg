require("dotenv").config();

const express = require("express");
const connectDB = require("./src/db/db");
const cors = require("cors");
const helmet = require("helmet");
const reportTypes = require("./src/routers/reportTypes");
const reports = require("./src/routers/reports");
const appeals = require("./src/routers/appeals");

connectDB();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/report_types", reportTypes);
app.use("/api/reports", reports);
app.use("/api/appeals", appeals);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
