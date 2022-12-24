import { createStore, combineReducers, applyMiddleware } from "redux";
import CategoryReducer from "./reducers/category.reducer";
import BreadReducer from "./reducers/breads.reducer";
import thunk from "redux-thunk";


const RootReducer = combineReducers({
  categories: CategoryReducer,
  breads: BreadReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));