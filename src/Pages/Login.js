import React, { useState } from "react";
import api from "../services/api"; // Ensure the correct import path
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Container, TextField, Button, Typography, Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#1976d2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#115293",
    },
  },
  link: {
    textDecoration: "none",
    color: "#1976d2",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  error: {
    marginTop: theme.spacing(2),
    color: theme.palette.error.main,
  },
}));

const Login = ({ setToken }) => {
  const classes = useStyles();
  const history = useHistory();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState(null);

  const login = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setLoginError("Email and password are required");
      return;
    }
    console.log("Login form data:", form); // Log form data
    try {
      const response = await api.post("/api/auth/login", form); // Use the axios instance
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      history.push("/dashboard"); // Redirect to the Dashboard page after successful login
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Invalid email or password"); // Set error message for invalid credentials
    }
  };


  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <form className={classes.form} onSubmit={login}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
        >
          Login
        </Button>
      </form>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link to="/register" className={classes.link}>
            Don't have an account? Register here
          </Link>
        </Grid>
      </Grid>
      {loginError && (
        <Typography variant="body2" className={classes.error}>
          {loginError}
        </Typography>
      )}
    </Container>
  );
};

export default Login;
