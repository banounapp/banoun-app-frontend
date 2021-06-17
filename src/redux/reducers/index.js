import { combineReducers } from "redux";
import { errorAlert, infoAlert, successAlert } from "./alert";
import categories from './categories'
import  specialist from './specialist'
export default combineReducers({
  errorAlert,
  infoAlert,
  successAlert,
  categories,
  specialist
});
