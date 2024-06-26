import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid, Paper, Box } from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Track & Organize Your Job Search
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          The leading tool for organizing, tracking, and managing all of your
          job applications in one place.
        </Typography>
        <Box my={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/register"
          >
            Sign up
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            component={Link}
            to="/login"
            style={{ marginLeft: 16 }}
          >
            Log in
          </Button>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: 16 }}>
              <Typography variant="h5" gutterBottom>
                Save jobs throughout your search
              </Typography>
              <Typography variant="body1">
                A fast, convenient way to bookmark jobs
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: 16 }}>
              <Typography variant="h5" gutterBottom>
                Track & organize job opportunities by stage
              </Typography>
              <Typography variant="body1">
                Keep a high-level view of your job search pipeline
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: 16 }}>
              <Typography variant="h5" gutterBottom>
                Get job description insights
              </Typography>
              <Typography variant="body1">
                View rich keyword & skill insights for every job
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box my={4}>
          <Typography variant="h6" component="p" gutterBottom>
            <strong>Attachments</strong>
          </Typography>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="subtitle1">
              Marketing Manager Resume
            </Typography>
            <Typography variant="body2">Match: 67% | Score: 75%</Typography>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
