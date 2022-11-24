import { combineReducers } from "redux";
import ItemReducer from "./itemReducer/ItemReducer"
export default combineReducers({
  items : ItemReducer
});
