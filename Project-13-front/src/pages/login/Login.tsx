import { useState } from "react";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, userProfile } from "../../Store/UserSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //redux state
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        navigate("/user");
      }
    });
  };
  
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLoginEvent}>
          <div className="input-wrapper">
            <label htmlFor="userEmail">userEmail</label>
            <input
              type="text"
              required
              id="userEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">
            {loading ? "Loading..." : "Login"}
          </button>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          {/* <a href="./user.html" className="sign-in-button">
            Sign In
          </a> */}
          {/* <!-- SHOULD BE THE BUTTON BELOW -->
      <!-- <button className="sign-in-button">Sign In</button> -->
      <!--  --> */}
        </form>
      </section>
    </main>
  );
};

export default SignIn;
