const express = require("express");
const { getUsers } = require("../controllers/users.controller");

const router = express();

router.get("/api/users", getUsers);

module.exports = router;
