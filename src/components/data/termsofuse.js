import React from "react";
import {
  Box,
  Typography,
  Paper,
  Container,
  Divider,
  Link,
} from "@mui/material";

const TermsOfUse = () => {
  return (
    <Container maxWidth="md" className="">
      <Paper elevation={3} className="p-8 mt-8">
        <Typography variant="h4" gutterBottom>
          Terms of Use
        </Typography>
        <Divider />
        <Box className="mt-8">
          <Typography variant="body1">
            Welcome to ApplyLog! These Terms of Use ("Terms") govern your access
            to and use of the ApplyLog application ("ApplyLog"), including any
            updates, enhancements, or new features added over time. By accessing
            or using ApplyLog, you agree to be bound by these Terms.
          </Typography>
          <Typography variant="body1" className="mt-8">
            <strong>Use of ApplyLog:</strong> ApplyLog is provided solely for
            your personal use to track job applications. You agree not to use
            ApplyLog for any unlawful or unauthorized purpose and to comply with
            all applicable laws and regulations.
          </Typography>
          <Typography variant="body1" className="mt-8">
            <strong>Account Registration:</strong> To access ApplyLog, you may
            be required to create an account. You are responsible for
            maintaining the confidentiality of your account credentials and for
            all activities that occur under your account.
          </Typography>
          <Typography variant="body1" className="mt-8">
            <strong>Intellectual Property:</strong> The content and features of
            ApplyLog are protected by copyright, trademark, and other laws. You
            agree not to modify, reproduce, or distribute any content from
            ApplyLog without prior written permission.
          </Typography>
          <Typography variant="body1" className="mt-8">
            <strong>Disclaimer:</strong> ApplyLog is provided "as is" without
            warranties of any kind, either express or implied. We do not
            guarantee that ApplyLog will always be available, secure, or free of
            errors.
          </Typography>
          <Typography variant="body1" className="mt-8">
            <strong>Changes to Terms:</strong> ApplyLog may update these Terms
            from time to time. We will notify you of any significant changes by
            posting the updated Terms on this page. Your continued use of
            ApplyLog after such changes constitutes your acceptance of the
            updated Terms.
          </Typography>
          <Typography variant="body1" className="mt-8">
            <strong>Contact Us:</strong> If you have any questions or concerns
            about these Terms of Use, please contact us at{" "}
            <Link href="mailto:visonovaofficial@email.com">contact@email.com</Link>.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsOfUse;
