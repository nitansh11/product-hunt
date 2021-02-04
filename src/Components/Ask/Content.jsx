import React from "react";
import styles from "./Content.module.css";
import QuestionCard from "./QuestionCard";
import { useSelector, useDispatch } from "react-redux";
import { getAskQuestions } from "../../Redux/ask/actions";
const Content = () => {
  const dispatch = useDispatch();
  const askQuestions = useSelector((state) => state.askReducer.askQuestions);
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
  return (
    <div className={styles.Content}>
      {renderQuestions()}
      {/* <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard /> */}
    </div>
  );
};

export default Content;
