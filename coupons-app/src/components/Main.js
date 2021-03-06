import React from 'react';
import { Link } from 'react-router-dom';
import Amazon from '../assets/amazon.png';
import Flipkart from '../assets/flipkart.jpg';
import Swiggy from '../assets/swiggy.jpg';

const Main = () => {
    return (
        <div>
            <h1 className="mt-1">Welcome To My Coupons</h1>
            <br />
            <div className="coupons-container">
                <Link to='/qr-code'><img className="couponImage" src={Amazon} alt="amazon" /></Link>
                <Link to='/qr-code'><img className="couponImage" src={Flipkart} alt="flipkart" /></Link>
                <Link to='/qr-code'><img className="couponImage" src={Swiggy} alt="swiggy" /></Link>
            </div>
        </div>
    )
}

export default Main;
