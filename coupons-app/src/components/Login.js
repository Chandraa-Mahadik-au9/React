import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

import { MyClientId } from "../credentials/MyInfo.js";

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      userInfo: "",
    };
  }

  onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
    this.setState({
        userInfo: res.profileObj
    });
    this.props.getProfile(res.profileObj);
  };

  onFailure = (res) => {
    console.log("[Login Failed] res: ", res);
  };
  render() {
    return (
      <div>
        <GoogleLogin
          clientId={MyClientId}
          buttonText="Google"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

export default Login;
