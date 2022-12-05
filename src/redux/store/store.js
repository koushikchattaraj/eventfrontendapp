import { createStore } from "redux";
import { mainReducer } from "../reducer/reducers";

const store = createStore(mainReducer);

export default store;
