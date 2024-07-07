import React from "react";
import {
  Box,
  Typography,
  Paper,
  Container,
  Divider,
  Link,
} from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" className="">
      <Paper elevation={3} className="p-8 mt-8">
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Divider />
        <Box className="mt-8">
          <Typography variant="body1">
            Welcome to ApplyLog, a job application tracker developed to assist
            you in managing your job search process effectively. We are
            committed to protecting your privacy and ensuring the security of
            your personal information. This Privacy Policy outlines how we
            collect, use, and safeguard your data when you use our services.
          </Typography>
          <Typography variant="body1" className="mt-8">
            <strong>Information We Collect:</strong> We collect and store the
            following types of personal information when you use ApplyLog:
            <ul>
              <li>
                <strong>Account Information:</strong> When you register for
                ApplyLog, we collect your email address and encrypted password
                to secure your account.
              </li>
              <li>
                <strong>Job Application Data:</strong> We store the job
                applications you add to ApplyLog, including company names, job
                positions, locations, application statuses, and any notes or
                details you choose to include.
              </li>
            </ul>
          </Typography>
          <Typography variant="body1" className="mt-8">
            <strong>How We Use Your Information:</strong> Your information is
            used primarily to provide and improve ApplyLog's services, including
            managing and organizing your job applications, analyzing usage
            trends to enhance our service, and communicating with you about
            updates, new features, or important notices related to ApplyLog.
          </Typography>
          <Typography variant="body1" className="mt-8">
            <strong>Data Security:</strong> We prioritize the security of your
            personal information. ApplyLog employs industry-standard security
            measures to protect your data from unauthorized access, alteration,
            disclosure, or destruction.
          </Typography>
          <Typography variant="body1" className="mt-8">
            <strong>Sharing Your Information:</strong> We do not share your
            personal information with third parties except as required by law or
            when necessary to provide our services. Your data remains
            confidential and is used solely for the purposes outlined in this
            Privacy Policy.
          </Typography>
          <Typography variant="body1" className="mt-8">
            <strong>Your Choices:</strong> You have the right to access,
            correct, or delete your personal information stored in ApplyLog. You
            can manage your account settings and preferences within the
            application.
          </Typography>
          <Typography variant="body1" className="mt-8">
            <strong>Changes to This Policy:</strong> ApplyLog may update this
            Privacy Policy from time to time. We will notify you of any
            significant changes by email or through the application. By
            continuing to use ApplyLog after these changes, you consent to the
            updated Privacy Policy.
          </Typography>
          <Typography variant="body1" className="mt-8">
            <strong>Contact Us:</strong> If you have any questions or concerns
            about this Privacy Policy or the handling of your personal
            information, please contact us at{" "}
            <Link href="mailto:visonovaofficial@email.com">
              contact@email.com
            </Link>
            .
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
