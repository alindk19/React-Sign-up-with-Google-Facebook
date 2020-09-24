import React, { useState } from "react";
import "./Signup.scss";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

function Signup(props) {
  var componentClicked = () => console.log("Working");

  var responseFacebook = (response) => {
    console.log(response);
  };

  var googleFailure = (response) => {
    console.log(response);
  };
  var googleSuccess = (response) => {
    console.log(response);
  };

  const [userData, setUserData] = useState();

  var submitForm = e => {
    console.log(userData);
    if(userData.fname === "" || userData.lname === "" || userData.email === "" || userData.password === ""){
      alert("Fill all the fields");
    }
    else alert(
      "Hello, Name:" + userData.fname + " " + userData.lname + 
      "\n Email : " + userData.email
    );
  }

  var onChange = e => {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name] : e.target.value
    })
    //console.log(e.target.value);
  }
  return (
    <div className="sign-up">
      <h4>SIGN UP</h4>
      <h1>Create your account</h1>
      Lorem ipsum dolor sit amet conse
      <div className="sign-up-buttons">
        <GoogleLogin
          clientId="1037013034751-psfqucsgg55cllggo20hslo42o420c1t.apps.googleusercontent.com"
          buttonText="Sign up with Google"
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy={"single_host_origin"}
          className="custom-google-button"
        />
        <FacebookLogin
          appId="421987672106735"
          autoLoad={false}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          textButton="Sign up with Facebook"
          cssClass="facebook-button"
          size="small"
          icon="fa-facebook"
        />
      </div>
      <p>
        <span>or</span>
      </p>
      <form className="sign-up-form">
        <input onChange={onChange} type="text" name="fname" placeholder="First Name" />
        <input onChange={onChange} type="text" name="lname" placeholder="Last Name" />
        <input onChange={onChange} type="email" name="email" placeholder="Email Address" />
        <input onChange={onChange} type="password" name="password" placeholder="Password" />
        {/* <i class="fa fa-eye" id="togglePassword"></i> */}
        <br />
        <span>
          By clicking Sign Up, you agree to our <a href="#">Terms of Use</a> and
          our <a href="#">Privacy Policy.</a>
        </span>
        <button onClick={submitForm}>SIGN UP</button>
      </form>
    </div>
  );
}

export default Signup;
