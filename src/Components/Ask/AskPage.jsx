import React from "react";
import styles from "./AskPage.module.css";
import { useParams } from "react-router-dom";
import ProductSidebar from "./ProductSidebar";
import { useSelector, useDispatch } from "react-redux";
import Recommendation from "./Recommendation";
import Comments from "./Comments";
const AskPage = () => {
  const { id } = useParams();
  const [showComments, setShowComments] = React.useState(false);
  
  const askQuestions = useSelector((state) => state.askReducer.askQuestions);
  const currentQuestion = askQuestions.filter(
    (question) => question.id == id
  )[0];

  const renderRecommendations = () => {
    if (currentQuestion.recommendations.length === 0) {
      return <h4>No Product Recommendations Yet.</h4>;
    }
    return currentQuestion.recommendations.map((recommendation) => (
      <Recommendation key={recommendation.id} {...recommendation} />
    ));
  };
  if (!currentQuestion) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.AskPage__parent}>
      <div className={styles.AskPage}>
        <div className={styles.AskPage__content}>
          <div className={styles.AskPage__contentHeader}>
            <div className={styles.AskPage__contentHeader__userheader}>
              <img src={currentQuestion.imageUrl} alt="image" />
              <h4>{currentQuestion.name}</h4>
              <p>{currentQuestion.about}</p>
            </div>
            <h3>{currentQuestion.title}</h3>
            <p>{currentQuestion.description}</p>
            <div className={styles.AskPage__contentHeader__footer}>
              <p>{currentQuestion.recommendations.length} RECOMMENDED</p>
              <button onClick={() => setShowComments((prev) => !prev)}>
                COMMENTS
              </button>
              <button>FOLLOW</button>
            </div>
            {showComments ? (
              <Comments
                allComments={currentQuestion.comments} questionId={currentQuestion.id}
                
              />
            ) : null}
          </div>
          <div className={styles.AskPage__contentRecommendations}>
            {renderRecommendations()}
          </div>
        </div>
        <ProductSidebar currentQuestion={currentQuestion} />
      </div>
    </div>
  );
};

export default AskPage;
