const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: false}));
// router.use(bodyParser.json());

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // ?
router.use(require("body-parser").text());

router.post("/charge", async (req: any, res: any) => {
  try {
    const {status} = await stripe.charges.create({
      amount: 300, // cents
      currency: "usd",
      description: "Delivery fee",
      source: req.body
    });

    res.json({status, Success: "Success"});
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

// app.listen(9000, () => console.log("Listening on port 9000"));

export {};
module.exports = router;
