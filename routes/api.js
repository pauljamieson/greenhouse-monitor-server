const apiController = require("../controllers/api");
const router = require("express").Router();

router.route("/").get(apiController.api_testRoute);

module.exports = router;
