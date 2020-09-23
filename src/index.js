import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HOME } from "./routes/routes";
import { Home } from "./pages/Home/Home";
import "./assets/main.css";
const AppWrapper = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path={HOME} component={Home} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
