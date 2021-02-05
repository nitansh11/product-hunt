import React from "react";
import styles from "./JobPostModal.module.css";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postJobs } from "../../Redux/myjobs/actions";
import { v4 as uuid } from "uuid";
const initState = {
  avatar: "",
  title: "",
  role: "",
  location: "none",
  description: "",
  engineering: false,
  design: false,
  marketing: false,
  sales: false,
  customerSupport: false,
  product: false,
  remote: false,
};

const JobPostModal = ({ isOpen, setIsOpen }) => {
  const [formValues, setFormValues] = React.useState(initState);
  let isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  let currentUser = useSelector((state) => state.authReducer.currentUser);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };
  const handlePostJob = () => {
    let tags = [];
    for (let key in formValues) {
      if (key === "engineering" && formValues[key]) tags.push("engineering");
      if (key === "sales" && formValues[key]) tags.push("sales");
      if (key === "marketing" && formValues[key]) tags.push("marketing");
      if (key === "design" && formValues[key]) tags.push("design");
      if (key === "product" && formValues[key]) tags.push("product");
      if (key === "customerSupport" && formValues[key])
        tags.push("customer-support");
    }
    const job = {
      id: uuid(),
      avatar: formValues.avatar,
      title: formValues.title,
      role: formValues.role,
      location: formValues.location,
      pics: "",
      tags: tags,
    };
    console.log(job);
    //dispatch jobs
      dispatch(postJobs(job));
      setIsOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        className={styles.JobPostModal__modal}
        overlayClassName={styles.JobPostModal___ModalOverlay}
      >
        <div className={styles.JobPostModal_heading}>
          <h1>Create your job listing</h1>
        </div>

        <div className={styles.JobPostModal__form}>
          <div className={styles.JobPostModal__formTitle}>
            <label htmlFor="title">Company Name</label>
            <input
              type="text"
              value={formValues.title}
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className={styles.JobPostModal__formRole}>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              value={formValues.role}
              name="role"
              onChange={handleChange}
            />
          </div>
          <div className={styles.JobPostModal__formLocation}>
            <label htmlFor="location">Location</label>
            <select
              value={formValues.location}
              name="location"
              onChange={handleChange}
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
          <div className={styles.JobPostModal__formCategory}>
            <label htmlFor="tags">Job Category</label>
            <div className={styles.JobSidebar__filters_one}>
              <div>
                <input
                  type="checkbox"
                  name="engineering"
                  id=""
                  checked={formValues.engineering}
                  onChange={handleChange}
                />
                <label htmlFor="engineering">⚒️ Engineering</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="design"
                  id=""
                  checked={formValues.design}
                  onChange={handleChange}
                />
                <label htmlFor="design">📢 Design</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="marketing"
                  id=""
                  checked={formValues.marketing}
                  onChange={handleChange}
                />
                <label htmlFor="marketing">📈 Marketing</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="sales"
                  id=""
                  checked={formValues.sales}
                  onChange={handleChange}
                />
                <label htmlFor="sales">💖 Sales</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="customerSupport"
                  id=""
                  checked={formValues.customerSupport}
                  onChange={handleChange}
                />
                <label htmlFor="customerSupport">💎 Customer Support</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="product"
                  id=""
                  checked={formValues.product}
                  onChange={handleChange}
                />
                <label htmlFor="">🎨 Product</label>
              </div>
            </div>
          </div>
          <div className={styles.JobPostModal__formLogo}>
            <label htmlFor="avatar">Company Logo Link</label>
            <input
              type="text"
              value={formValues.avatar}
              name="avatar"
              onChange={handleChange}
            />
          </div>
          <div className={styles.JobPostModal__formDescription}>
            <label htmlFor="description">Description Link</label>
            <input
              type="text"
              value={formValues.description}
              name="description"
              onChange={handleChange}
            />
          </div>
          <div className={styles.JobPostModal__formButton}>
            <button onClick={handlePostJob}>Post Job</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default JobPostModal;
