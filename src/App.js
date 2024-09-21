import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import HomePage from "./Pages/HomePage";
import TaskComponent from "./Pages/TaskBoard";
import Analytics from "./Pages/Analytics";
import Calendar from "./Pages/Calender";
import PrivacyPolicy from "./components/data/Privacy";
import TermsOfUse from "./components/data/termsofuse";
import CookiesPolicy from "./components/data/cookies";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <div className="font-sans">
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>
          <Route path="/">
            {token ? <Dashboard token={token} /> : <Redirect to="/login" />}
          </Route>
          <Route path="/taskboard" component={TaskComponent} />
          <Route path="/analysis" component={Analytics} />
          <Route path="/calender" component={Calendar} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-use" component={TermsOfUse} />
          <Route path="/cookies-policy" component={CookiesPolicy} />
          <Route path="/s">
            <HomePage /> {/* Always render HomePage for the root route */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
