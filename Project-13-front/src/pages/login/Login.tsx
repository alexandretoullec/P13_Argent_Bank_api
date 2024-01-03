import { useState } from "react";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { itsToken } from "../../Store/UserSlice";
import App from "../home/Home";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  // useState pour les inputs de connexion
  const [itsInput, setItsInput] = useState({ email: "", password: "" });
  // useState pour les erreurs (true/false)
  const [error, setError] = useState(false);

  // useSelector nous permet d'extraire les datas venant de l'état du store Redux
  const token = useSelector((state) => state.user.token);

  // Va permettre de récupérer la valeur des inputs et changer son état.
  const inputChange = (e) => {
    const inputID = e.target.id;
    // Récupère tout ce qu'il y a dans 'itsInput' et ajoute la valeur du target dans {email:'', password:''} grâce à setItsInput.
    setItsInput({
      ...itsInput,
      [inputID]: e.target.value,
    });
  };

  // useDispatch ne peut pas être appelé dans un callback étant donné que c'est une fonction donc const.
  const dispatchMethod = useDispatch();

  const submitLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: itsInput.email,
        password: itsInput.password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        // useDispatch est le seul moyen de déclencher un changement d'état. La fonction du reducer en question sera appelée de manière synchrone.
        // Sa valeur de retour sera considérée comme le prochain état.
        dispatchMethod(itsToken(json.body.token));
      })
      .catch((error) => {
        setError(true);
        setItsInput({
          ...itsInput,
        });
        console.error("Problème = " + error);
      });
  };

  if (token) return <Link to="/user" />;

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={submitLogin}>
          <div className="input-wrapper">
            <label htmlFor="userEmail">userEmail</label>
            <input type="text" required id="userEmail" onChange={inputChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              id="password"
              onChange={inputChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Login</button>
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
