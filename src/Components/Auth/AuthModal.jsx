import React from "react";
import styles from "./AuthModal.module.css";
import Modal from "react-modal";
import GoogleLogin from "react-google-login";
import { loginSuccess, loginFailure } from "../../Redux/auth/actions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUser } from "../../Redux/auth/actions";
import { AuthContext } from "../../AuthContextProvider";
const AuthModal = () => {
  let isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  let currentUser = useSelector((state) => state.authReducer.currentUser);
  const { isOpen, setIsOpen } = React.useContext(AuthContext);
  const history = useHistory();
  const dispatch = useDispatch();

  let backupUser = {
    googleId: "106980268689840113089",
    imageUrl:
      "https://lh3.googleusercontent.com/ogw/ADGmqu8MW1sSd6pu_D3NjPp6juiOyCKYx-VyEYQCQzm08Q=s83-c-mo",
    email: "nitanshrastogi11@gmail.com",
    name: "Nitansh Rastogi",
    givenName: "Nitansh",
    familyName: "Rastogi",
    id: 4,
    about: "B2C Hosting Consultant",
  };
  let myResponse = {
    profileObj: backupUser,
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        className={styles.AuthModal__modal}
        overlayClassName={styles.AuthModal___ModalOverlay}
      >
        <img
          src="https://ph-static.imgix.net/category-tech/kitty.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=92&fit=max"
          alt="not found"
        />
        <h2>Sign up on Product Hunt</h2>
        <p>
          Join our community of friendly folks discovering and sharing the
          latest products in tech.
        </p>
        <div className={styles.AuthModal__modalButtons}>
          <button style={{ backgroundColor: "#00ACED", color: "white" }}>
            <i className="fa fa-twitter"></i>
            LOG IN WITH TWITTER
          </button>
          <button
            onClick={() => {
              dispatch(loginSuccess(myResponse));
              dispatch(addUser(myResponse.profileObj));
              console.log("Current user:", currentUser);
              setIsOpen(false);
            }}
            style={{ backgroundColor: "#3B5998", color: "white" }}
          >
            <i className="fa fa-facebook"></i>
            LOG IN WITH FACEBOOK
          </button>
          <GoogleLogin
            clientId="411977787315-mrdcahuab81r8iba5l4hms9d6jd40vii.apps.googleusercontent.com"
            buttonText="Login Google"
            onSuccess={(response) => {
              dispatch(loginSuccess(response));
              dispatch(addUser(response.profileObj));
              console.log("Current user:", currentUser);
              setIsOpen(false);
            }}
            onFailure={(response) => dispatch(loginFailure(response))}
            cookiePolicy={"single_host_origin"}
          >
            LOG IN WITH GOOGLE
          </GoogleLogin>
          <button style={{ backgroundColor: "#333333", color: "white" }}>
            <i className="fa fa-angellist"></i>
            LOG IN WITH ANGELLIST
          </button>
        </div>
        <p>We'll never post to any of your accounts without your permission.</p>
      </Modal>
    </>
  );
};

export default AuthModal;
