const AuthModel = require("../models/Auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const register = async (req, res) => {
  try {
    const auth = await AuthModel.findOne({ email: req.body.email });
    if (auth) {
      return res
        .status(400)
        .json({ status: "error", msg: "Please use another email address" });
    }
    const hash = await bcrypt.hash(req.body.password, 12);
    await AuthModel.create({
      email: req.body.email,
      hash,
      role: req.body.role || "user",
      name: req.body.name,
    });
    res.json({ status: "ok", msg: "user created successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ status: "ok", msg: "registration" });
  }
};

const login = async (req, res) => {
  try {
    const auth = await AuthModel.findOne({ email: req.body.email });
    if (!auth) {
      console.log("user not registered");
      return res
        .status(400)
        .json({ status: "error", msg: "user not registered" });
    }
    const result = await bcrypt.compare(req.body.password, auth.hash);
    if (!result) {
      console.log("login failed");
      return res.status(400).json({ status: "error", msg: "login failed" });
    }
    const claims = {
      id: auth._id,
      email: auth.email,
      role: auth.role,
      name: auth.name,
    };
    const access = jwt.sign(claims, process.env.ACCESS_SECRET, {
      expiresIn: "1h",
      jwtid: uuidv4(),
    });
    const refresh = jwt.sign(claims, process.env.REFRESH_SECRET, {
      expiresIn: "30d",
      jwtid: uuidv4(),
    });
    res.json({ access, refresh });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ status: "error", msg: "login failed" });
  }
};

const refresh = async (req, res) => {
  try {
    const decoded = jwt.verify(req.body.refresh, process.env.REFRESH_SECRET);
    const claims = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
      name: decoded.name,
    };
    const access = jwt.sign(claims, process.env.ACCESS_SECRET, {
      expiresIn: "1h",
      jwtid: uuidv4(),
    });
    res.json({ access });
  } catch (error) {
    console.log(error.message),
      res.status(400).json({ status: "error", msg: "error refreshing token" });
  }
};

module.exports = { register, login, refresh };
