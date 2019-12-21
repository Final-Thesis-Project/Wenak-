"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const User = require("./database.js").User;
const jwt = require("jsonwebtoken");
const config = require("./config");
const Order = require("./database.js").Order;
const Pusher = require("pusher");
const ObjectId = require("mongodb").ObjectID;
var VerifyToken = require("./authontication/AuthController.js");
var pusher = new Pusher({
    appId: "916313",
    key: "87e78d78194c0e51f286",
    secret: "14f74092b4f27209a030",
    cluster: "ap2",
    encrypted: true
});
router.get("/", VerifyToken, (req, res) => {
    pusher.trigger("wenak", "order-delivered", {
        message: "the order has delivered"
    });
});
module.exports = router;
//# sourceMappingURL=notifications.js.map