import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./products/productsReducer";
import { jobsreducer } from "./jobs/reducer";
import { authReducer } from "./auth/authReducer";
import { operationsReducer } from './operations/operationsReducer'
import { askReducer } from "./ask/askReducer";
import {discussionsReducer} from './discussions/discussiosReducer'


const rootReducer = combineReducers({
  productsReducer,
  authReducer,
  jobsreducer,
  askReducer,
  operationsReducer,
  discussionsReducer
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
