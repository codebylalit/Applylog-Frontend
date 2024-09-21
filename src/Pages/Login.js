import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import api from "../services/api"; // Ensure the correct import path
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const LoginForm = ({ className = "", setToken }) => {
  const history = useHistory();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState(null);

  const onForgotPasswordContainerClick = useCallback(() => {
    console.log("Forgot password clicked");
  }, []);

  const login = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setLoginError("Email and password are required");
      return;
    }
    console.log("Login form data:", form);
    try {
      const response = await api.post("/api/auth/login", form);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      history.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Invalid email or password");
    }
  };

  const handleGoogleLoginSuccess = async (response) => {
    console.log("Google login success:", response);
    try {
      const res = await api.post("/api/auth/google", {
        token: response.credential,
      });
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      history.push("/dashboard");
    } catch (error) {
      console.error("Google login error:", error);
      setLoginError("Google login failed");
    }
  };

  return (
    <GoogleOAuthProvider clientId="725701763080-ko4itnvb5pctkdqqun85tcpakmvjqehp.apps.googleusercontent.com">
      <div className="w-full h-[982px] bg-gray-100 relative flex flex-col items-center justify-start py-[100px] px-5 box-border gap-[293px] leading-[normal] tracking-[normal] font-body-18 text-center text-xs text-dimgray-300 font-inter mq450:gap-[146px]">
        <div className="w-[317px] flex flex-col items-start justify-start gap-[20px] text-center text-xs text-dimgray-100 font-inter">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[13px] text-5xl text-white">
            <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-3">
              <h1 className="m-0 flex-1 relative text-inherit font-black font-inherit mq450:text-lgi">
                Sign In
              </h1>
            </div>
          </div>
          <input
            className="w-full box-border bg-gray-200 text-white outline-none self-stretch h-[45px] rounded-lg flex flex-row items-start justify-start py-[15px] px-3 border-[1px]  border-solid border-darkslategray font-inter font-semibold text-xs text-dimgray-200 min-w-[190px]"
            placeholder="Email"
            type="text"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="w-full box-border outline-none bg-gray-200 text-white self-stretch h-[45px] rounded-lg flex flex-row items-start justify-start py-[15px] px-3 border-[1px]  border-solid border-darkslategray font-inter font-semibold text-xs text-dimgray-200 min-w-[190px]"
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <div
            className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1.5 cursor-pointer text-gray-500 hover:underline"
            onClick={onForgotPasswordContainerClick}
          >
            Forgot your password?
          </div>
          <button
            className="cursor-pointer border-none py-[16.5px] px-5 bg-white self-stretch rounded-lg flex flex-row items-start justify-center whitespace-nowrap hover:bg-gainsboro"
            onClick={login}
          >
            Log in
          </button>
          <div className="self-stretch flex flex-row items-end justify-start py-1.5 px-0 gap-[19.5px]">
            <div className="w-[85px]  text-gray-500 flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-dimgray-100" />
            </div>
            <div className="h-4  text-gray-500 flex-1 relative flex items-center justify-center">
              continue with
            </div>
            <div className="w-[85px]  text-gray-500 flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-dimgray-100" />
            </div>
          </div>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={() => {
              console.error("Google login error");
              setLoginError("Google login failed");
            }}
          />
          {loginError && (
            <p className="text-red-500 text-xs mt-2">{loginError}</p>
          )}
        </div>
        <div className=" overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border">
          <div className="flex-1 relative">
            <span className="font-semibold">
              <span className="text-black"></span>
              <span>Don't have an account?</span>
            </span>
            <span className="text-black">{` `}</span>
            <Link
              to="/register"
              className="[text-decoration:none] text-white whitespace-nowrap"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
  setToken: PropTypes.func.isRequired,
};

export default LoginForm;
