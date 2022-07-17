const { httpResp } = require("../helpers");

module.exports.api_testRoute = (req, res) => {
  try {
    res.json(httpResp(1, "/api", "get"));
  } catch (e) {
    res.json(httpResp(2, "/api", "get"));
  }
};
