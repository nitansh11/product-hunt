import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./products/productsReducer";
// import { jobsreducer } from "./jobs/reducer";
import { myJobsReducer } from "./myjobs/myJobsReducer";
import { authReducer } from "./auth/authReducer";
import { operationsReducer } from "./operations/operationsReducer";
import { askReducer } from "./ask/askReducer";

const rootReducer = combineReducers({
  productsReducer,
  authReducer,
  myJobsReducer,
  askReducer,
  operationsReducer,
});

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
