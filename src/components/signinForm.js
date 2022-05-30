import React, { useState } from "react";
import axios from "axios";
import "./style.css";
// import res from "express/lib/response";

function SigninForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = () => {
    console.log(email, password);
    axios
      .post("http://localhost:5000/user/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        alert(response.data.message);
        window.location = "http://localhost:3000/home";
      })
      .catch(function (error) {
        console.log(error);
        alert(error.response.data.message);
      });
  };
  const handleKeypress = e => {
    //it triggers by pressing the enter key

  if (e.charCode === 13) {
    handleSubmit();
  }
};
  return (
    <div className="form">
      <h2>Login Form</h2>
      <div className="form-body">
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={email}
            onKeyPress={handleKeypress}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onKeyPress={handleKeypress}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
      </div>
      <div class="footer">
        <button
          onClick={() => handleSubmit()}
          type="submit"
          class="btn"
        >
          Sign In
        </button>
      </div>
      <br></br>
      <div>If you don't have an account, please navigate to sign up tab</div>
    </div>
  );
}
export default SigninForm;
