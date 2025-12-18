const express = require("express");
const { getuser, postuser, deleteuser, updateuser } = require("../controller/userController");

const router = express.Router();

router.get("/api/getUser", getuser);
router.post("/api/postUser", postuser);
router.delete("/api/deleteUser/:id", deleteuser);
router.put("/api/updateUser/:id", updateuser);

module.exports = router;
