import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import myStore from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={myStore}>
    <App />
  </Provider>
);