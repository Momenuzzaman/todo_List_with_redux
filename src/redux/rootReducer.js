import { combineReducers } from "redux";
import filterReducer from "./filters/reducer";
import todosReducer from "./todos/reducer";

const rootReducer = combineReducers({
  filters: filterReducer,
  todos: todosReducer,
});

export default rootReducer;
