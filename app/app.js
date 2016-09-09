import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import CommentBox from "./components/commentBox";
import store from "./store";

require("./assets/app.scss");

ReactDOM.render((
  <Provider store={store}>
    <CommentBox />
  </Provider>
), document.getElementById("content"));
