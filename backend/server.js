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

connectDB();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", auth);

app.use("/report_types", reportTypes);

app.use("/api/reports", reports);
app.use("/api/appeals", appeals);
app.use("/api/iWitness", iWitness);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
