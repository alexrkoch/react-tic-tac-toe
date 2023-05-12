import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./state/store"
import App from "./components/App";
import "./index.css";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Failed to find the root element.");
}
