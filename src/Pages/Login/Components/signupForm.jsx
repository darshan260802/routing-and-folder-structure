import { useNavigate } from "react-router-dom";

export const SignupForm = ({setIsLogin}) => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/home', {replace: true})
  }

  return(
    <div className="login-form">
      <h1>Signup</h1>

      <div className="login-form-fields">
        <input type="text" placeholder="Name" name="" id="" />
        <input type="text" placeholder="Email" name="" id="" />
        <input type="text" placeholder="Password" name="" id="" />
        <button onClick={handleLogin}>Signup</button>
      </div>

      <h3>
        Already have an account?{" "}
        <span onClick={() => setIsLogin(true)}>Login</span>
      </h3>
    </div>
  );
};
