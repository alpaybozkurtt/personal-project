import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducers/reducers";

const myStore = createStore(reducer);

export default myStore;