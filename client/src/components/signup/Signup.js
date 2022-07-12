import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";


import "./signup.css";

const Signup = ({ setOpen, setLogin }) => {
  const messages = [
    "Successfully Registered Login now",
    "* Fill in all fields",
    "* Password should be more than 6 characters",
    "Network error",
  ];
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);
  const [credentials, setCredentials] = useState({
    username: undefined,
    phone: undefined,
    city: undefined,
    email: undefined,
    country: undefined,
    password: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async () => {
    if (
      credentials.username === undefined ||
      credentials.phone === undefined ||
      credentials.city === undefined ||
      credentials.email === undefined ||
      credentials.country === undefined ||
      credentials.password.length < 6
    ) {
      return toast.error("* Fill in all fields");
      setSuccess(false);
      setMessage(messages[1]);
    } else {
      // POST DATA
      const newUser = await axios.post("/auth/register", {
        ...credentials,
        password: credentials.password,
      });

      if (newUser) {
        return toast.success("Successfully Registered Login now");
        setSuccess(true);
        setMessage(messages[0]);
      } else {
        setSuccess(false);
        setMessage(messages[3]);
      }
    }
  };

  return (
    <div className="signup">
      <ToastContainer position="top-center" limit={1} />
      <div className="signupContainer">
        <Close onClick={() => setOpen(false)} className="sClose" />
        <h3 className="lTitle">REGISTER</h3>
        <span className={success ? "sSuccess sMessage" : "sError sMessage"}>
          {message}
        </span>
        <div className="inputWrapper">
          <input
            placeholder="username"
            type="text"
            className="sInput"
            id="username"
            onChange={handleChange}
          />
          <input
            placeholder="email"
            type="text"
            className="sInput"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="inputWrapper">
          <input
            placeholder="Phone"
            type="text"
            className="sInput"
            id="phone"
            onChange={handleChange}
          />
          <input
            placeholder="e.g Kenya"
            type="email"
            className="sInput"
            id="country"
            onChange={handleChange}
          />
        </div>
        <div className="inputWrapper">
          <input
            placeholder="city"
            type="text"
            className="sInput"
            id="city"
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            className="sInput"
            id="password"
            onChange={handleChange}
          />
        </div>

        <button className="sButton" onClick={handleClick}>
          Signup
        </button>
        <span className="lanchorSpan">
          Already registered?
          <button
            onClick={() => {
              setOpen(false);
              setLogin(true);
            }}
            className="lanchor"
          >
            Login here
          </button>
        </span>
      </div>
    </div>
  );
};

export default Signup;
