import React from "react";
import styles from "./Comments.module.css";
import SingleComment from "./SingleComment";
import { useSelector, useDispatch } from "react-redux";
import { postComment } from "../../Redux/ask/actions";
import { AuthContext } from "../../AuthContextProvider";
import { v4 as uuid } from "uuid";
import { getUserByEmail } from "../../Redux/auth/actions";
const Comments = ({ questionId, allComments }) => {
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const user = useSelector((state) => state.authReducer.user);
  console.log("------------------------------------");
  console.log("current user:", currentUser);
  console.log("user:", user);
  console.log("------------------------------------");

  const { isOpen, setIsOpen } = React.useContext(AuthContext);
  const [commentText, setCommentText] = React.useState("");
  const renderComments = () => {
    if (allComments.length === 0) {
      return <h3>No Comments Yet.</h3>;
    }
    return allComments.map((comment) => {
      return <SingleComment key={comment.id} {...comment} />;
    });
  };

  React.useEffect(() => {
    if (currentUser) {
      dispatch(getUserByEmail(currentUser.email));
    }
  }, [currentUser]);
  const dispatch = useDispatch();
  const handleCommentPost = () => {
    if (!currentUser) {
      setIsOpen(true);
      return;
    }
    if (commentText === "") {
      alert("Please enter some text!");
      return;
    }
    const updatedComments = [
      ...allComments,
      { id: uuid(), text: commentText, email: currentUser.email, upvotes: 0 },
    ];

    //dispatch
    dispatch(postComment(questionId, updatedComments));
    setCommentText("");
  };
  return (
    <div className={styles.Comments}>
      <div className={styles.PostComment}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="add comment here..."
        />
        <button onClick={handleCommentPost}>POST</button>
      </div>
      <div className={styles.Comments__AllComments}>{renderComments()}</div>
    </div>
  );
};

export default Comments;
