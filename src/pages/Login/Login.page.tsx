import React, { useState } from "react";
import { useCookies } from "react-cookie";
import "./Login.styles.css";
import User from "../../assets/User/User.svg";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmail } from "../api/auth";

function Login() {
  const [, setCookies] = useCookies(["token"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    signInWithEmail(email, password)
      .then((res: any) => {
        setCookies("token", res.data.data.JWT);
        navigate("/campaigns", {});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <div className="Login">
      <div className="justify-center flex">
        <img src={User} alt="User" className="User mt-[40px] w-[75px]" />
      </div>
      <div className="Login-container bg-[#c4c4c4]/[0.5] h-[100%] rounded-xl text-center shadow-[0_10px_4px_0px_rgba(0,0,0,0.25)] mt-[60px] mx-[6%] mb-[24px]">
        <h1 className="text-3xl font-bold text-center font-['Raleway'] text-[48px] font-normal text-[#101010]/[0.5] pt-[32px]">
          Login
        </h1>
        <div className="flex flex-col">
          <div className="text-center">
            <input
              aria-label="username"
              className="border-0 rounded-xl focus-visible:outline-0 p-[15px] w-11/12 mt-14 bg-[#c4c4c4]/[0.8] placeholder:text-white"
              type="text"
              name="username"
              placeholder="email"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div className="text-center">
            <input
              aria-label="password"
              className="border-0 rounded-xl focus-visible:outline-0 p-[15px] h-[54px] w-11/12 mt-6 bg-[#c4c4c4]/[0.8] placeholder:text-white"
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={onPasswordChange}
            />
          </div>
          <div className="text-right text-white mr-[4.5%] mt-[16px]">
            <Link to="/forgetpassword"> Forgot Password?</Link>
          </div>
          <div className="text-center">
            <button
              className="bg-[#C27FA8] hover:bg-[#FFA4DC] py-2 px-4 mt-14 mb-16 rounded-md w-[157px] justify-center"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
