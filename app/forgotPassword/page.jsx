"use client"

import ForgotPassword from "@/components/ForgotPassword"
import { useState } from "react";

const page = () => {
  const [type, setType] = useState("Reset");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "Forgot" ? "right-panel-active" : "");
  return (
    <div className={containerClass} id="container">
      <ForgotPassword />
      <div className="overlay-container">
      <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome </h1>
              <p className="text_center">
                Please click Reset to reset your password
              </p>
              <br></br>
              <button
                className="ghost"
                id="Reset"
                onClick={() => handleOnClick("Reset")}
              >
                Reset Password
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome</h1>
              <p className="text_center">Please click Forgot password to change your Password</p>
              <br></br>
              <button
                className="ghost "
                id="Forgot"
                onClick={() => handleOnClick("Forgot")}
              >
                Forgot Password
              </button>
            </div>
          </div>
      </div>
    </div>
     
  )
}

export default page