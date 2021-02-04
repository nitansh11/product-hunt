import React from "react";
import styles from "./Comments.module.css";
import SingleComment from "./SingleComment";
import { useSelector, useDispatch } from "react-redux";
import { postComment } from "../../Redux/ask/actions";
import { AuthContext } from "../../AuthContextProvider";
import { v4 as uuid } from "uuid";
const Comments = ({ questionId,allComments }) => {
  const currentUser = useSelector((state) => state.authReducer.currentUser);
 // console.log("current user:", currentUser);
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
    // console.log("updated comments:",updatedComments);
    //dispatch
    dispatch(postComment(questionId,updatedComments));
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
