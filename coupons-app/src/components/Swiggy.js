import React from 'react';
import SwiggyVoucher from '../assets/swiggy.jpg';

const Amazon = () => {
    let CouponData = localStorage.getItem('QR Code Coupon');
    CouponData = JSON.parse(CouponData);
    const CouponName = CouponData.name;
    const generatedTime = CouponData.duration;

    const validateCoupon = (event) => {
        event.preventDefault();
        const currentTime = new Date().getTime();
        if(currentTime < generatedTime) {
            window.alert("Coupon Applied !");
            console.log(`Swiggy Coupon: ${CouponName} is successfully applied.`);
        } else {
            window.alert("This Coupon code has expired.");
            console.log("Please generate coupon again.");
        }
    }

    return (
        <div>
            <h1>Hi, welcome To Swiggy</h1>
            <br />
            <div>
                <img src={SwiggyVoucher} alt="swiggy voucher" />
            </div>
            <br />
            <div>
                <form>
                    <label htmlFor="qrCode">Your Swiggy Coupon Code : </label>
                    <input type="text" id="qrCode" name="qrCode" defaultValue={CouponName}/>
                    <button onClick={validateCoupon}>Apply Coupon</button>
                </form>
            </div>
        </div>
    )
}

export default Amazon;
