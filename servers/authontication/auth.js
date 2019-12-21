"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const User = require('../database.js').User;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
var VerifyToken = require('./AuthController.js');
const { check, validationResult } = require('express-validator');
const pino = require('express-pino-logger')();
const client = require('twilio')('ACec49a638f1063d9909e19325c1cd3247', '190ffee0620ff3a9b93d93d562eeea78');
router.use(pino);
require('dotenv').config();
//user register
router.post('/register', [
    check('mobilenum').isNumeric(),
    // password must be at least 5 chars long
    check('password').isLength({ min: 5 })
], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    var mobilenum = req.body.mobilenum;
    var password = req.body.password;
    var type = req.body.type;
    var name = req.body.name;
    const hashedPassword = bcrypt.hashSync(password, 8);
    console.log(req.body.mobilenum);
    //check if the user found
    User.findOne({ 'mobilenum': mobilenum }, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (user) {
            return res.status(500).send({ succes: false, message: 'User already exist!' });
        }
        //otherwise create a new user
        User.create({
            mobilenum: mobilenum,
            password: hashedPassword,
            name: name,
            type: type
        }, function (err, user) {
            if (err)
                return res.status(500).send("There was a problem registering the user.");
            // create a token
            // const token = jwt.sign({ id: user._id }, config.secret, {
            //     expiresIn: 86400 // expires in 24 hours
            // });
            const hello = "hello user";
            res.status(200).send({ auth: true, hello: hello });
            // res.header('Content-Type', 'application/json');
            client.messages
                .create({
                from: +18574454640,
                to: mobilenum,
                body: "Hello from wenak app, hope you become our client"
            })
                .then(() => {
                res.send(JSON.stringify({ success: true }));
            })
                .catch((err) => {
                console.log(err);
                res.send(JSON.stringify({ success: false }));
            });
        });
    });
});
//user login
router.post('/login', function (req, res) {
    User.findOne({ mobilenum: req.body.mobilenum }, function (err, user) {
        if (err)
            return res.status(500).send('Error on the server.');
        if (!user)
            return res.status(404).send('No user found.');
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        const type = user.type;
        if (!passwordIsValid)
            return res.status(401).send({ auth: false, token: null });
        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token, type: type });
    });
});
//get the user
router.get('/me', VerifyToken, function (req, res, next) {
    User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err)
            return res.status(500).send("There was a problem finding the user.");
        if (!user)
            return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});
//get the user type
router.get('/usertype', VerifyToken, function (req, res, next) {
    User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err)
            return res.status(500).send("There was a problem finding the user.");
        if (!user)
            return res.status(404).send("No user found.");
        var type = user.type;
        res.status(200).send(type);
    });
});
//logout 
router.get('/logout', function (req, res) {
    res.status(200).send({ auth: false, token: null });
});
router.get("/", (req, res) => {
    res.json({ status: "success", message: "hello" });
});
module.exports = router;
//# sourceMappingURL=auth.js.map