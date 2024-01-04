//style
import "./login.scss";
// react and router
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
//servives
import { login } from "../../features/userSlice";
import { getUserProfile, signIn } from "../../services/api";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch(); // useDispatch() is used to dispatch an action to the redux store
  const navigate = useNavigate(); // useNavigate() is used to navigate to a different page

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // call the signIn function from the API that sends a POST request to sign in the user
      const response = await signIn(email, password);
      // if the API call is successful, call getUserProfile() to get the user's profile
      if (response) {
        const resUserProfile = await getUserProfile(response);
        //if the API call is successful, dispatch the login action to the redux store
        if (resUserProfile) {
          dispatch(
            // updates the user state in the redux store using the login action
            login({
              token: response,
              rememberMe,
              firstName: resUserProfile.firstName,
              lastName: resUserProfile.lastName,
            })
          );
        }
        //navigate to the acount page
        navigate("/user");
      } else {
        alert("invalid credentials");
      }
    } catch ({ response }) {
      console.log(response);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="userEmail">userEmail</label>
            <input
              type="text"
              required
              value={email}
              id="userEmail"
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
            <input
              type="checkbox"
              id="remember-me"
              defaultChecked={rememberMe}
              onChange={() => {
                setRememberMe(!rememberMe);
              }}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
