import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import AuthModal from "../Auth/AuthModal";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { logout } from "../../Redux/auth/actions";

import { useHistory } from "react-router-dom";

Modal.setAppElement("#root");
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation().pathname;
  const history = useHistory();
  const style = location.includes("founder-club/benefits")
    ? {
        backgroundColor: "#16161D",
        borderBottom: "0.5px solid rgba(216, 210, 210, 0.2)",
      }
    : {};
  const inputStyle = location.includes("founder-club/benefits")
    ? { backgroundColor: "black", color: "white", border: "none" }
    : {};

  let isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  console.log("Navbar is logged in", isLoggedIn);
  let currentUser = useSelector((state) => state.authReducer.currentUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <div className={styles.Navbar} style={style}>
      <div>
        <div className={styles.Navbar__logo}>
          <Link to="/">
            <div>
              <h1>P</h1>
            </div>
          </Link>
        </div>

        <div className={styles.Navbar__searchBar} style={inputStyle}>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            placeholder="Discover your next favourite thing..."
            type="text"
            style={inputStyle}
          />
        </div>
        <ul>
          <li>
            <Link to="/ask">Ask</Link>
          </li>

          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/discussions">Discussions</Link>
          </li>

          <li>
            <Link to="/mentors">Mentors</Link>
          </li>
          <li>
            <Link to="/founder-club/benefits">Deals</Link>
          </li>
          <i className="fas fa-ellipsis-h"></i>
        </ul>
        {!isLoggedIn ? (
          <div className={styles.Navbar__buttons}>
            <button onClick={() => setIsOpen(true)}>LOG IN</button>
            <button>SIGN UP</button>
          </div>
        ) : (
          <div className={styles.Navbar__buttons}>
            <button className={styles.Navbar__logoutbtn} onClick={handleLogout}>
              LOG OUT
            </button>
          </div>
        )}
      </div>
      <AuthModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
