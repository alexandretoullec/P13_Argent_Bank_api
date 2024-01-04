//style
import "./user.scss";

//component
import UserCard from "../../components/userCard/UserCard";

//react
import { useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateUser } from "../../features/userSlice";

//services
import { updateUserProfile } from "../../services/api";

const accountContent = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    amountDescription: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    amountDescription: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    amountDescription: "Current Balance",
  },
];

const User = () => {
  const user = JSON.parse(useSelector(selectUser)); // useSelector() is used to access the user object from the redux store

  const dispatch = useDispatch(); // useDispatch() is used to dispatch an action to the redux store

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showModal, setShowModal] = useState(false);

  //handle the form submission to update the user's first and last name

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // call the updateUserProfile() from the API that sends a put request to update tu user's first and last name

    const response = await updateUserProfile(firstName, lastName);
    if (response) {
      dispatch(updateUser({ firstName, lastName }));
      setShowModal(!showModal);
    } else {
      // if the API call is not successful, display an alert
      alert("something went wrong");
    }
  };

  return (
    <main className="main bg-dark">
      {!showModal ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}
          </h1>

          <button
            className="edit_button"
            onClick={() => setShowModal(!showModal)}
          >
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <form className="edit__modal" onSubmit={handleSubmit}>
            <div className="edit__modal__content">
              <input
                type="text"
                placeholder={user.firstName}
                className="edit__modal__content__input"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder={user.lastName}
                className="edit__modal__content__input"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="edit__modal__buttons">
              <button type="submit" className="edit__modal__buttons__btn">
                Save
              </button>
              <button
                className="edit__modal__buttons__btn"
                onClick={() => setShowModal(!showModal)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      <h2 className="sr_only">Accounts</h2>

      {accountContent.map((account, index) => (
        <UserCard key={index} {...account} />
      ))}
    </main>
  );
};

export default User;
