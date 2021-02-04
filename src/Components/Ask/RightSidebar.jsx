import React from "react";
import styles from "./RightSidebar.module.css";

const RightSidebar = () => {
  return (
    <div className={styles.RightSidebar}>
      <div className={styles.RightSidebar__activityList}>
        <p>YOUR ACTIVITY</p>
        <ul>
          <li>
            <span>🤔</span>0 questions asked
          </li>
          <li>
            <span>✍️</span>1 recommended
          </li>
          <li>
            <span>👀</span>0 followed questions
          </li>
        </ul>
      </div>

      <div className={styles.RightSidebar__helpfulList}>
        <p>MOST HELPFUL THIS WEEK</p>
        <ul>
          <li>
            <img
              src="https://ph-avatars.imgix.net/844341/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=32&h=32&fit=crop"
              alt="image"
            />
            <div>
              <h4>Jason Grills</h4>
              <p>Customer & Product Growth Manager</p>
            </div>
          </li>
          <li>
            <img
              src="https://ph-avatars.imgix.net/844341/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=32&h=32&fit=crop"
              alt="image"
            />
            <div>
              <h4>Jason Grills</h4>
              <p>Customer & Product Growth Manager</p>
            </div>
          </li>
          <li>
            <img
              src="https://ph-avatars.imgix.net/844341/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=32&h=32&fit=crop"
              alt="image"
            />
            <div>
              <h4>Jason Grills</h4>
              <p>Customer & Product Growth Manager</p>
            </div>
          </li>
          <li>
            <img
              src="https://ph-avatars.imgix.net/844341/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=32&h=32&fit=crop"
              alt="image"
            />
            <div>
              <h4>Jason Grills</h4>
              <p>Customer & Product Growth Manager</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
