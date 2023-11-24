const mongoose = require("mongoose");

const AuthRolesSchema = new mongoose.Schema(
  {
    role: String,
  },
  { collection: "authRoles" }
);

module.exports = mongoose.model("AuthRole", AuthRolesSchema);
