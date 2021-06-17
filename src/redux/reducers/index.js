import { combineReducers } from "redux";
import { errorAlert, infoAlert, successAlert } from "./alert";
import categories from './categories'

export default combineReducers({
  errorAlert,
  infoAlert,
  successAlert,
  categories
});
