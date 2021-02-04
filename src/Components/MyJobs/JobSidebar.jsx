import React from "react";
import styles from "./JobSidebar.module.css";
const JobSidebar = () => {
  return (
    <div className={styles.JobSidebar}>
      <div className={styles.JobSidebar__image}>
        <img
          src="https://ph-static.imgix.net/kitty_ph.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=max"
          alt=""
        />
        <div>
          <h2>Are you hiring?</h2>
          <p>Advertise from $299</p>
          <button>POST A JOB</button>
        </div>
      </div>

      <div className={styles.JobSidebar__filters}>
        <p>Filters</p>
        <div>
          <div className={styles.JobSidebar__filters_one}>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                <span></span>⚒️ Engineering
              </label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">🎨 Engineering</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">📢 Engineering</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">📈 Engineering</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">💖 Engineering</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">💎 Engineering</label>
            </div>
          </div>
          <div className={styles.JobSidebar__filters_two}>
            <p>Location</p>
            <select>
              <option value="none">Select Location</option>
              <option value="new york">New York</option>
              <option value="denmark">Denmark</option>
              <option value="chicago">Chicago</option>
              <option value="san francisco">San Francisco</option>
              <option value="copenhagen">Copenhagen</option>
              <option value="boulder">Boulder</option>
              <option value="oakland">Oakland</option>
            </select>
          </div>
          <div className={styles.JobSidebar__filters_three}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">🌎 Remote Jobs Only</label>
          </div>
        </div>
      </div>
      <div className={styles.JobSidebar__subscribe}>
        <p>Don’t miss your dream job</p>
        <p>Get email updates when new jobs are added ✌</p>
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default JobSidebar;
