import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  username: string;
  verificationCode: string;
}

export const VerificationEmail = ({
  username,
  verificationCode,
}: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your VibeCart verification code</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome to VibeCart</Heading>
          <Text style={text}>Hi {username},</Text>
          <Text style={text}>
            Your verification code is:{" "}
            <span style={code}>{verificationCode}</span>
          </Text>
          <Text style={text}>
            This code will expire in 30 minutes. If you didn't request this
            code, you can safely ignore this email.
          </Text>
          <Text style={footer}>
            Best regards,
            <br />
            The VibeCart Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  borderRadius: "5px",
  margin: "0 auto",
  padding: "45px",
  width: "465px",
};

const h1 = {
  color: "#000",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 15px",
  textAlign: "center" as const,
};

const text = {
  color: "#000",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "24px 0",
};

const code = {
  backgroundColor: "#f4f4f4",
  borderRadius: "4px",
  color: "#000",
  fontFamily: "monospace",
  fontSize: "24px",
  fontWeight: "bold",
  letterSpacing: "8px",
  padding: "12px 24px",
};

const footer = {
  color: "#666666",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "24px",
  margin: "48px 0 0",
  textAlign: "left" as const,
};
