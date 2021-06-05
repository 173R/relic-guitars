import {combineReducers} from "redux";

import itemsReducer from "./itemsReducer";
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  itemsReducer,
  itemReducer,
  cartReducer,
});
export default rootReducer;