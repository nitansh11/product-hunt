import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation().pathname;
  const style = location.includes("founder-club/benefits")
    ? {
        backgroundColor: "#16161D",
        borderBottom: "0.5px solid rgba(216, 210, 210, 0.2)",
      }
    : {};
  const inputStyle = location.includes("founder-club/benefits")
    ? { backgroundColor: "black", color: "white", border: "none" }
    : {};
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
            <Link to="/founder-club/benefits">Deals</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/discussions">Discussions</Link>
          </li>
          <li>
            <Link to="/ship">Ship</Link>
          </li>
          <li>
            <Link to="/mentors">Mentors</Link>
          </li>
          <i className="fas fa-ellipsis-h"></i>
        </ul>
        <div className={styles.Navbar__buttons}>
          <button>LOG IN</button>
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
