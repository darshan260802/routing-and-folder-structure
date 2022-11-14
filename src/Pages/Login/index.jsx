import ".//Login.css";
import LoginIMG from './/Images/login.svg'
import { useState } from "react";
import { LoginForm } from "./Components/loginForm";
import { SignupForm } from "./Components/signupForm";
const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-container">
      <div className="login-panel-left">
        <img src={LoginIMG} alt="login illustration" />
      </div>
      <div className="login-panel-right">
        {isLogin ? <LoginForm setIsLogin={setIsLogin} /> : <SignupForm setIsLogin={setIsLogin} />}
      </div>
    </div>
  );
};

export default Login;
