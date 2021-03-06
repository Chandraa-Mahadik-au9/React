import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import Amazon from "./Amazon.js";
import QrCode from "./QrCode.js";
import Home from "./Home.js";

function Routes() {
  const [userData, getData] = useState({data: ""});

  const getProfile = (profileObj) => {
      getData(profileObj);
    console.log(profileObj);
  };

  const data = userData;
  let coupons;

  const OnSuccessfulLogin = () => {
      if(data) {
          coupons = (<Route path="/main" component={Main} />)
      } else {
          coupons = (<Route exact path="/" component={Home} />)
      }
  }

  return (
    <div>
      <Header getProfile={getProfile} />
      {coupons}
      <Route path="/" component={Main} />
      <Route exact path="/qr-code" component={QrCode} />
      <Route path="/amazon" component={Amazon} />
      <Route path="/flipkart" component={Amazon} />
      <Route path="/swiggy" component={Amazon} />
      <Footer />
    </div>
  );
}

export default Routes;
