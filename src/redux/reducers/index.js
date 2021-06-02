import { combineReducers } from "redux";
import { errorAlert, infoAlert, successAlert } from "./alert";

export default combineReducers({
  errorAlert,
  infoAlert,
  successAlert,
});
