import { func } from "prop-types";

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const User = require("../database.js").User;
const jwt = require("jsonwebtoken");
const config = require("../config");
const Order = require("../database.js").Order;
const ObjectId = require("mongodb").ObjectID;
const VerifyToken = require("../authontication/AuthController.js");

// get all orders that state is pending
router.get("/allorder_d", function(req: any, res: any) {
    Order.find({state: "pending"}).exec((err: any, order: any) => {
        if (err) {
          console.log(err);
          req.send();
        }
        res.json(order); });
    const id = req.user_id;
});

// make the state prepared.
router.post("/state_prepared", function(req: any, res: any) {
  const id_order = req.body._id;
  Order.findOneAndUpdate({_id : ObjectId(id_order)}, {$set: {state: "prepared"}}, {useFindAndModify: false}).then((data: any) => {
      if (data === null) {
          throw new Error("Order Not Found");
      }
      res.json({ message: "Order updated!" });
      console.log("New order data", data);
  }).catch( (error: any) => {
      /*
          Deal with all your errors here with your preferred error handle middleware / method
       */
      res.status(500).json({ message: "Some Error!" });
      console.log(error);
   });
});

// accept the order
router.post("/accept_order", VerifyToken, function(req: any, res: any, next: any) {

  User.findById(req.userId, { password: 0 }, function(err: any, user: any) {
    if (err) { return res.status(500).send("There was a problem finding the user."); }
    if (!user) { return res.status(404).send("No user found."); }
    const id = user._id;
    const name = user.name;
    // var order = {
    //   driver_id:id
    // }
    const id_order = req.body._id;
    console.log(id_order);
    console.log(id);

    Order.findOneAndUpdate({_id : ObjectId(id_order)}, {$set: {driver_id: ObjectId(id), state: "current", driver_name: name}}, {useFindAndModify: false}).then((data: any) => {
      if (data === null) {
          throw new Error("Order Not Found");
      }
      res.json({ message: "Order updated!" });
      console.log("New order data", data);
  }).catch( (error: any) => {
      /*
          Deal with all your errors here with your preferred error handle middleware / method
       */
      res.status(500).json({ message: "Some Error!" });
      console.log(error);
   });
  });
});

// get the current order
router.get("/current_order_d", VerifyToken, function(req: any, res: any) {
    Order.find({state: "prepared"}).exec((err: any, order: any) => {
        if (err) {
          console.log(err);
          req.send();
        }
        res.json(order); });
});

// get the previous orders
router.get("/previous_order_d", VerifyToken, function(req: any, res: any) {
    Order.find({state: "previous"}).exec((err: any, order: any) => {
        if (err) {
          console.log(err);
          req.send();
        }
        res.json(order); });
});

export {};
module.exports = router;
