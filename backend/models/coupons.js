const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    discount: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}); 

module.exports = mongoose.model('Coupon', CouponSchema);