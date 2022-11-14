import { useNavigate } from "react-router-dom";

export const LoginForm = ({ setIsLogin }) => {

    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/home', {replace: true})
    }

  return (
    <div className="login-form">
      <h1>Login</h1>

      <div className="login-form-fields">
        <input type="text" placeholder="Email" name="" id="email" />
        <input type="text" placeholder="Password" name="" id="password" />
        <button onClick={handleLogin}>Login</button>
      </div>

      <h3>
        Don't have an account?{" "}
        <span onClick={() => setIsLogin(false)}>Signup</span>
      </h3>
    </div>
  );
};
