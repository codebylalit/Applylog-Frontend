import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard"
import HomePage from "./Pages/HomePage";
import TaskComponent from "./Pages/TaskBoard";
import Analytics from "./Pages/Analytics";
import Calendar from "./Pages/Calender";

const theme = createTheme(); // Create a theme

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
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>
          <Route path="/dashboard">
            {token ? <Dashboard token={token} /> : <Redirect to="/login" />}
          </Route>
          <Route path="/taskboard" component={TaskComponent} />
          <Route path="/analysis" component={Analytics} />
          <Route path="/calender" component={Calendar} />
          <Route path="/">
            <HomePage /> {/* Always render HomePage for the root route */}
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
