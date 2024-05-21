const express = require("express");
const router = express.Router();

const{getallquestions,getallquestionsTesting} = require("../Controller/Questions");
router.route("/").get(getallquestions);
router.route("/testing").get(getallquestionsTesting);

module.exports = router ;