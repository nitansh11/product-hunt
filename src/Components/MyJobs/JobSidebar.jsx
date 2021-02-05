import React from "react";
import styles from "./JobSidebar.module.css";
import { getJobs, updateFilteredJobs } from "../../Redux/myjobs/actions";
import { useSelector, useDispatch } from "react-redux";
import { filterJobs } from "../../utils";
const initState = {
  engineering: false,
  design: false,
  marketing: false,
  sales: false,
  customerSupport: false,
  product: false,
  remote: false,
  location: "none",
};
const JobSidebar = () => {
  const [formValues, setFormValues] = React.useState(initState);
  const [filteredJobs, setFilteredJobs] = React.useState([]);
  const [changed, setChanged] = React.useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormValues({ ...formValues, [name]: value });

    /* Just switching the value of "changed" 
    state whenever ANY change happned in the 
    formValues so that we can update the jobs we want to show to user */
    setChanged((prev) => !prev);
  };
  const jobs = useSelector((state) => state.myJobsReducer.myJobs);
  const dispatch = useDispatch();

  //  getting the job on page load and setting the jobs state
  React.useEffect(() => {
    //dispatch get jobs
    dispatch(getJobs());
  }, []);

  //updating the filteredJobs state when user make a change through filter
  React.useEffect(() => {
    console.log("----------------------------------------")
    console.log("Changed: " + changed);
    let updatedFilteredJobs = filterJobs(jobs, formValues);
    console.log("Filtered Jobs inside useEffect",  updatedFilteredJobs);
    console.log("----------------------------------------")
// dispatch an action to update the filtered jobs
    dispatch(updateFilteredJobs(updatedFilteredJobs));
    
  }, [changed]);
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
              <input
                type="checkbox"
                name="engineering"
                id=""
                onChange={handleChange}
                checked={formValues.engineering}
              />
              <label htmlFor="engineering">⚒️ Engineering</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="design"
                id=""
                onChange={handleChange}
                checked={formValues.design}
              />
              <label htmlFor="design">📢 Design</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="marketing"
                id=""
                onChange={handleChange}
                checked={formValues.marketing}
              />
              <label htmlFor="marketing">📈 Marketing</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="sales"
                id=""
                onChange={handleChange}
                checked={formValues.sales}
              />
              <label htmlFor="sales">💖 Sales</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="customerSupport"
                id=""
                onChange={handleChange}
                checked={formValues.customerSupport}
              />
              <label htmlFor="customerSupport">💎 Customer Support</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="product"
                id=""
                onChange={handleChange}
                checked={formValues.product}
              />
              <label htmlFor="">🎨 Product</label>
            </div>
          </div>
          <div className={styles.JobSidebar__filters_two}>
            <p>Location</p>
            <select
              value={formValues.location}
              onChange={handleChange}
              name="location"
            >
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
            <input
              type="checkbox"
              name="remote"
              id=""
              onChange={handleChange}
              checked={formValues.remote}
            />
            <label htmlFor="remote">🌎 Remote Jobs Only</label>
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
