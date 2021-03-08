const express = require("express");

const router = express.Router();

const Coupon = require("../models/coupons.js");


router.post('/home', (req, res) => {
    const { name, discount } = req.body;
    
});