import { combineReducers , createStore } from "redux";

import breadsReducer from "./reducer/bread.reducer";
import categoryReducer from "./reducer/category.reducer";

const rootReducer = combineReducers({
    categories: categoryReducer,
    breads: breadsReducer,
})

export default createStore(rootReducer);
