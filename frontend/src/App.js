import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Customer from "./pages/Customer";
import TopBar from "./components/TopBar";

export default function App() {
  return (
    <Router>
      <div>
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