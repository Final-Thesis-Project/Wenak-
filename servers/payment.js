"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

// router.use(bodyParser.json());
 const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
router.use(require("body-parser").text());
router.post("/charge", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { status } = yield stripe.charges.create({
            amount: 200,
            currency: "usd",
            description: "An example charge",
            source: req.body
        });
        res.json({ status, Success: 'Success' });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
}));

router.use(bodyParser.json());
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
router.post('/api/doPayment/', (req, res) => {
    return stripe.charges
        .create({
        amount: req.body.amount,
        currency: 'usd',
        source: req.body.tokenId,
        description: 'Test payment',
    })
        .then((result) => res.status(200).json(result));
});

module.exports = router;
//# sourceMappingURL=payment.js.map