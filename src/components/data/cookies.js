import React from "react";
import {
  Box,
  Typography,
  Paper,
  Container,
  Divider,
  Link,
} from "@mui/material";

const CookiesPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Container maxWidth="md">
        <Paper elevation={3} className="p-10 mt-8">
          <Typography
            variant="h4"
            gutterBottom
            className="text-center text-blue-600"
          >
            Cookies Policy
          </Typography>
          <Divider className="mb-8" />
          <Box className="space-y-6">
            <Typography variant="body1">
              Welcome to ApplyLog's Cookies Policy. This policy explains how
              ApplyLog uses cookies and similar technologies to recognize you
              when you visit our website or use our services.
            </Typography>
            <Typography variant="body1">
              <strong>What are Cookies:</strong> Cookies are small text files
              that are stored on your device (computer or mobile device) when
              you visit a website. They allow the website to recognize your
              device and store information about your preferences or past
              actions.
            </Typography>
            <Typography variant="body1">
              <strong>How We Use Cookies:</strong> ApplyLog uses cookies for the
              following purposes:
              <ul className="list-disc ml-6 mt-2">
                <li>
                  <strong>Authentication:</strong> To authenticate users and
                  maintain their sessions.
                </li>
                <li>
                  <strong>Preferences:</strong> To remember your preferences and
                  settings.
                </li>
                <li>
                  <strong>Analytics:</strong> To analyze how users interact with
                  our website and improve our services.
                </li>
              </ul>
            </Typography>
            <Typography variant="body1">
              <strong>Types of Cookies:</strong> ApplyLog uses both session and
              persistent cookies. Session cookies are temporary and are deleted
              when you close your browser, while persistent cookies remain on
              your device for a longer period.
            </Typography>
            <Typography variant="body1">
              <strong>Your Choices:</strong> You can control and manage cookies
              through your browser settings. Most browsers allow you to refuse
              or accept cookies and to delete them. However, if you disable
              cookies, some features of ApplyLog may not function properly.
            </Typography>
            <Typography variant="body1">
              <strong>Changes to This Policy:</strong> ApplyLog may update this
              Cookies Policy from time to time. We will notify you of any
              significant changes by updating this page. By continuing to use
              ApplyLog, you consent to the use of cookies as outlined in this
              policy.
            </Typography>
            <Typography variant="body1">
              <strong>Contact Us:</strong> If you have any questions or concerns
              about this Cookies Policy, please contact us at{" "}
              <Link
                href="mailto:visonovaofficial@email.com"
                className="text-blue-600 underline"
              >
                contact@email.com
              </Link>
              .
            </Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default CookiesPolicy;
