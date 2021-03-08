const { ObjectId } = require("bson");

const DefaultCoupons = [
    {
        _id: ObjectId("6044e5b811303dbd399a84c5"),
        name: "Amazon",
        discount: "20",
        createdOn: Date.now()
    },
    {
        _id: ObjectId("6044e5b811303dbd399a84c5"),
        name: "Flipkart",
        discount: "40",
        createdOn: Date.now()
    }
]

module.exports = DefaultCoupons;

