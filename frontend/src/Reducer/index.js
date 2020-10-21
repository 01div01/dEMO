import { combineReducers } from "redux";
import headerReducer from "../Containers/HeaderContainer/headerReducer";

export default combineReducers({
  headerState: headerReducer,
});
