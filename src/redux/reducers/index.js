import { combineReducers } from "redux";
import { errorAlert, infoAlert, successAlert } from "./alert";
import categories from "./categories";
import specialist from "./specialist";
import userProfile from "./userProfile";
import posts from "./posts";
import Reviews from "./Reviews";
export default combineReducers({
  errorAlert,
  infoAlert,
  successAlert,
  categories,
  specialist,
  userProfile,
  posts,
  Reviews
});
