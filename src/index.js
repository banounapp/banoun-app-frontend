import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./app";
//redux
import { Provider } from "react-redux";
import store from "../src/redux/store";
//styles
import "./index.css";
import "../src/style/main.css";

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
