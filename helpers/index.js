module.exports.httpResp = (status, route, method, data = {}) => {
  const respStatus =
    status == 1 ? "success" : status == 2 ? "failure" : status.toLowerCase();
  return { status: respStatus, route, method, data };
};
