const jwt = require("jsonwebtoken");
const config = require("../config");

function verifyToken(req: any, res: any, next: any) {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ auth: false, message: "No token provided." });
  }

  jwt.verify(token, config.secret, function(err: any, decoded: any) {
    if (err) {
    return res.status(500).send({ auth: false, message: "Failed to authenticate token." });
    }

    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}

export {};
module.exports = verifyToken;
