import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { userActions } from "./redux/actions";

import store from './redux/store';

import "./styles/index.scss"; // библиотеки antd, в самом файле происходит подключение, кот. будет доступно всем компонентам
import 'emoji-mart/css/emoji-mart.css';

store.dispatch(userActions.fetchUserData());

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
