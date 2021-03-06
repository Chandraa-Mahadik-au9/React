import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { apiKey } from "../credentials/MyInfo.js";

const apiUrl = `https://api.scanova.io/v2/qrcode/text?data=ABCD123456&size=custom&custom_size=350&error_correction=M&data_pattern=RECT&eye_pattern=RECT_RECT&data_gradient_style=None&data_gradient_start_color=%23000000&data_gradient_end_color=%23000000&eye_color_inner=%23000000&eye_color_outer=%23000000&background_color=%23FFFFFF&apikey=${apiKey}`;

const dummyQRCodeUrl =
  "https://api.scanova.io/v2/qrcode/text?data=ABCD123456&size=custom&custom_size=350&error_correction=M&data_pattern=RECT&eye_pattern=RECT_RECT&data_gradient_style=None&data_gradient_start_color=%23000000&data_gradient_end_color=%23000000&eye_color_inner=%23000000&eye_color_outer=%23000000&background_color=%23FFFFFF&apikey=jthmxdewpygosbrwsxhqfiquyzfyujvejkwwtzgu";

const QrCode = (props) => {
  const [qrCode, getCode] = useState("");

  const getQRCode = () => {
    axios.get(apiUrl).then((res) => {
      const code = res.config.url;
      console.log(res.config.url);
      getCode(code);
    //   console.log(qrCode);
    });
  };

  const storeCodeToLocal = () => {
      let couponData = {
          name: "Today's Coupon 20%OFF",
          duration: new Date().getTime() + 3600000,
          QrCode: dummyQRCodeUrl
      }
      couponData = JSON.stringify(couponData);
      localStorage.setItem('QR Code Coupon', couponData);
  }

  return (
    <div>
      <button className="qrBtn">Get QR Coupon Code</button>
      <div>
        {dummyQRCodeUrl ? (
          <img className="qrCode" src={dummyQRCodeUrl} alt="QR Code" />
        ) : (
          "No QR Code."
        )}
        <div className="mb-2">
          <Link to="/amazon" onClick={storeCodeToLocal}>Get Coupon Code</Link>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
