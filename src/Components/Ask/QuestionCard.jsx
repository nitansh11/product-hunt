import React from "react";
import styles from "./QuestionCard.module.css";
import { useHistory } from "react-router-dom";
const QuestionCard = ({
  id,
  about,
  title,
  description,
  imageUrl,
  name,
  recommendations,
}) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/ask/${id}`);
  };
  return (
    <div className={styles.QuestionCard}>
      <div className={styles.QuestionCard__header}>
        <img src={imageUrl} alt="image" />
        <h4>{name}</h4>
        <p>{about}</p>
      </div>
      <h3 onClick={handleClick}>{title}</h3>
      <p>{description}</p>
      <div className={styles.QuestionCard__footer}>
        <p>{recommendations.length} RECOMMENDED</p>
     
        <button>FOLLOW</button>
      </div>
    </div>
  );
};

export default QuestionCard;
