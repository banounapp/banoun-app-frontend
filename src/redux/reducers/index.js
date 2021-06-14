import { combineReducers } from 'redux';
import { errorAlert, infoAlert, successAlert } from "./alert";

import  categories from './categories'
export default combineReducers({
    categories,
    errorAlert,
    infoAlert,
    successAlert,
 
});