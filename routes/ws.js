const router = require("express").Router();
const websocketController = require("../controllers/ws");

router.ws("/", websocketController.websocket_recv);

module.exports = router;
