import React from "react";
import styles from "./Content.module.css";
import QuestionCard from "./QuestionCard";
import { useSelector, useDispatch } from "react-redux";
import { getAskQuestions } from "../../Redux/ask/actions";
import { AuthContext } from "../../AuthContextProvider";
import { postAskQuestions } from "../../Redux/ask/actions";
import { v4 as uuid } from "uuid";
const Content = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const askQuestions = useSelector((state) => state.askReducer.askQuestions);
  const { isOpen, setIsOpen } = React.useContext(AuthContext);

  console.log("ask questions:", askQuestions);
  React.useEffect(() => {
    dispatch(getAskQuestions());
  }, []);

  const renderQuestions = () => {
    if (askQuestions.length === 0) return;
    return askQuestions.map((question) => (
      <QuestionCard key={question.id} {...question} />
    ));
  };

  const handlePostAskQuestion = () => {
    if(title===''){
      alert("type title...");
      return
    }
    //dispatch action here
    let askQuestion = {
      id: uuid(),
      title,
      description,
      email: currentUser.email,
      recommendations: [],
      tags: "",
      date: "",
      comments: [],
    };
    console.log("ready question is:", askQuestion);
     dispatch(postAskQuestions(askQuestion));
     setTitle("");
     setDescription("");
  };
  return (
    <div className={styles.Content}>
      <div className={styles.Content__postQuestion}>
        {isLoggedIn ? (
          <div>
            <img
              src="https://lh3.googleusercontent.com/ogw/ADGmqu8MW1sSd6pu_D3NjPp6juiOyCKYx-VyEYQCQzm08Q=s83-c-mo"
              alt="image"
            />
            <div>
              <input
                type="text"
                value={title}
                placeholder="recommendation query title here..."
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                rows="5"
                value={description}
                placeholder="recommendation query description here..."
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
        ) : null}

        {isLoggedIn ? (
          <button onClick={handlePostAskQuestion}>
            ASK A PRODUCT RECOMMENDATION
          </button>
        ) : (
          <button onClick={() => setIsOpen(true)}>
            Log In To ASK A PRODUCT RECOMMENDATION
          </button>
        )}
      </div>

      {renderQuestions()}
    </div>
  );
};

export default Content;
