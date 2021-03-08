const express = require('express');
const { ensureAuthenticated } = require('../credentials/auth.js');
const Coupon = require('../models/coupons.js');
const DefaultCoupons = require('../src/coupons.js');
const db = require('../src/connection.js');


const router = express.Router();

const dbName = "myFirstDatabase";
const dbCollectionName = "coupons";
let AvailableCoupons = [];

router.get('/', (req, res) => {
    res.render('welcome')
});

db.initialize(dbName, dbCollectionName, (coupons) => {
    coupons.find().toArray(function(err, res) {
        if (err) throw err;
          console.log(res);
        AvailableCoupons = res;

        router.post("/home", (req, res) => {
            const {name, discount} = req.body;
            console.log(name, discount);

            newCoupon = new Coupon({
                name,
                discount
            });

            console.log(newCoupon);

            newCoupon.save((err, cpn) => {
                if (err) {
                    return console.log(err);
                }
                console.log(`${cpn} added to database successfully.`);
            });
        });

    });
}, (err) => {
    if (err) throw (err);
});

router.get('/home', (req, res) => {
    // res.send('Welcome To Home Page.');
    res.render('home', {coupons: AvailableCoupons});
});

router.get('/apply', (req, res) => {
    // res.send('Welcome To Home Page.');
    res.render('apply');
});

module.exports = router;
