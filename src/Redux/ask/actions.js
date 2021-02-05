import axios from "axios";
import * as actionTypes from "./actionTypes";

// get all askedquestions
const getAskQuestionsRequest = () => {
  return {
    type: actionTypes.GET_ASK_QUESTIONS_REQUEST,
  };
};

const getAskQuestionsSuccess = (askQuestions) => {
  return {
    type: actionTypes.GET_ASK_QUESTIONS_SUCCESS,
    payload: askQuestions,
  };
};

const getAskQuestionsFailure = () => {
  return {
    type: actionTypes.GET_ASK_QUESTIONS_FAILURE,
  };
};

const getAskQuestions = () => {
  return async (dispatch) => {
    dispatch(getAskQuestionsRequest());
    try {
      const resQues = await axios.get(
        "https://json-server-nitansh-1.herokuapp.com/askedQuestions"
      );
      const resUsers = await axios.get(
        "https://json-server-nitansh-1.herokuapp.com/users"
      );
      let questions = resQues.data;
      const users = resUsers.data;

      const allQuestions = questions.map((question) => {
        let user = users.filter((user) => user.email === question.email)[0];
        question.name = user.name;
        question.about = user.about;
        question.imageUrl = user.imageUrl;
        return question;
      });
      dispatch(getAskQuestionsSuccess(allQuestions));
    } catch (err) {
      console.log("inside get ask questions error", err);
      dispatch(getAskQuestionsFailure());
    }
  };
};

// update recommendation array of a particular product

const updateRecommendationRequest = () => {
  return {
    type: actionTypes.UPDATE_RECOMMENDATION_REQUEST,
  };
};

const updateRecommendationSuccess = (askQuestions) => {
  return {
    type: actionTypes.UPDATE_RECOMMENDATION_SUCCESS,
    payload: askQuestions,
  };
};
const updateRecommendationFailure = () => {
  return {
    type: actionTypes.UPDATE_RECOMMENDATION_FAILURE,
  };
};

const updateRecommendation = (id, updatedRecommendations) => {
  return async (dispatch) => {
    dispatch(updateRecommendationRequest());
    try {
      const response = await axios.patch(
        `https://json-server-nitansh-1.herokuapp.com/askedQuestions/${id}`,
        { recommendations: updatedRecommendations }
      );

      dispatch(getAskQuestions());
      dispatch(updateRecommendationSuccess());
    } catch (err) {
      console.log("inside update recommendation error", err);
      dispatch(updateRecommendationFailure());
    }
  };
};

// post comment in asked questions

const postCommentRequest = () => {
  return {
    type: actionTypes.POST_ASK_QUESTIONS_REQUEST,
  };
};

const postCommentSuccess = (askQuestions) => {
  return {
    type: actionTypes.POST_ASK_QUESTIONS_SUCCESS,
  };
};
const postCommentFailure = () => {
  return {
    type: actionTypes.POST_ASK_QUESTIONS_FAILURE,
  };
};

const postComment = (id, comments) => {
  console.log("Question to update:"+id);
  console.log("updated comments:"+comments)
  return async (dispatch) => {
    dispatch(postCommentRequest());
    try {
      const response = await axios.patch(
        `https://json-server-nitansh-1.herokuapp.com/askedQuestions/${id}`,
        { comments: comments }
      );
      dispatch(getAskQuestions());
      dispatch(postCommentSuccess());
    } catch (err) {
      console.log("inside post comment error", err);
      dispatch(postCommentFailure());
    }
  };
};
export { getAskQuestions, updateRecommendation, postComment };
