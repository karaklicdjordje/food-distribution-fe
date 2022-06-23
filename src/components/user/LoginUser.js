import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/user.service";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const LoginUser = () => {
  let navigate = useNavigate();
  const form = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    UserService.login(email, password).then(
      () => {
        navigate("/home");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setLoading(false);
        setMessage(resMessage);
      }
    );
  };
  return (
    <div className="font-sans antialiased h-screen w-screen">
      <div className="w-full bg-green fixed shadow z-1">
        <div className="container mx-auto"></div>
      </div>
      <div className="w-full bg-grey-lightest">
        <div className="container mx-auto py-8">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
              Please login to your account
            </div>
            <div className="py-4 px-8">
              
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none border rounded w-1/2 py-2 px-3 text-grey-darker"
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  onChange={onChangeEmail}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-1/2 py-2 px-3 text-grey-darker"
                  id="password"
                  type="password"
                  placeholder="Your secure password"
                  onChange={onChangePassword}
                />
                <p className="text-grey text-xs mt-1">At least 6 characters</p>
              </div>
              <div className="flex mt-8 bg-slate-400 w-1/2 justify-center rounded-md">
                <button
                  className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full"
                  type="submit"
                  onClick={(e) => handleLogin(e)}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginUser;
