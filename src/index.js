import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./login/login";
import SignupComponent from "./signup/signup";
import DashboardComponent from "./dashboard/dashboard";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBChXXC_bmr4bCbDFToKMTPVcDclLX4A0Y",
  authDomain: "chatapp-react-45b31.firebaseapp.com",
  databaseURL: "https://chatapp-react-45b31.firebaseio.com",
  projectId: "chatapp-react-45b31",
  storageBucket: "chatapp-react-45b31.appspot.com",
  messagingSenderId: "472368769863",
  appId: "1:472368769863:web:bb9a73184671901432fa62",
  measurementId: "G-S5THFB2GGZ",
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/dashboard" component={DashboardComponent}></Route>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
