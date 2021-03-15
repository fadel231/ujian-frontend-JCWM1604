import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers";
import Thunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(Thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
