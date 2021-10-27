import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";
import Customer from "./pages/Customer/Customer";
import TopBar from "./components/TopBar";
import './css/app.css';

export default function App() {
  return (
    <Router>
      <div id="mainDiv">
        <TopBar>
          <Switch>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/customer">
              <Customer />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </TopBar>
      </div>
    </Router>
  );
}