import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = ({ className = "", setToken }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://applylog-server.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          history.push("/login");
        }, 2000); // Redirect after 2 seconds
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Registration failed");
      }
    } catch (error) {
      setError("Error during registration");
    }
  };

  const onLoginLinkClick = () => {
    history.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center font-body-18">
      <div className={`w-full max-w-xs p-8 ${className}`}>
        <h1 className="text-2xl font-bold text-white mb-4 text-center">
          Start for free
        </h1>
        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
        {success && (
          <p className="text-green-500 text-xs mt-2">
            Registration successful! Redirecting to{" "}
            <span
              className="underline cursor-pointer"
              onClick={onLoginLinkClick}
            >
              login
            </span>
            ...
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            className="w-full box-border outline-none bg-gray-100 text-white self-stretch h-12 rounded-lg mb-3 px-3 border-[1px] border-solid border-darkslategray font-inter font-semibold text-xs text-dimgray-200"
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            autoComplete="username"
            required
          />
          <input
            className="w-full box-border outline-none bg-gray-100 text-white self-stretch h-12 rounded-lg mb-3 px-3 border-[1px] border-solid border-darkslategray font-inter font-semibold text-xs text-dimgray-200"
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="email"
            required
          />
          <input
            className="w-full box-border outline-none bg-gray-100 text-white self-stretch h-12 rounded-lg mb-3 px-3 border-[1px] border-solid border-darkslategray font-inter font-semibold text-xs text-dimgray-200"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            autoComplete="new-password"
            required
          />
          <button
            className="w-full box-border outline-none bg-white text-gray-800 self-stretch h-12 rounded-lg mb-3 px-5 border-solid border-darkslategray font-inter font-semibold text-xs hover:bg-gray-200"
            type="submit"
          >
            Start for free
          </button>
        </form>
        <div className="mt-2 text-sm text-center">
          <span>Already have an account?</span>{" "}
          <span
            className="text-white cursor-pointer underline"
            onClick={onLoginLinkClick}
          >
            Log in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
