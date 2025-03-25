import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({
  name,
  email,
  message,
}: EmailTemplateProps) => {
  return (
    <Html>
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={heading}>New Contact Form Submission</Text>
          <Text style={paragraph}>Hello,</Text>
          <Text style={paragraph}>
            You have received a new contact form submission from your portfolio website.
          </Text>
          <Text style={paragraph}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={paragraph}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={paragraph}>
            <strong>Message:</strong>
          </Text>
          <Text style={messageText}>{message}</Text>
          <Text style={paragraph}>
            You can reply directly to this email to respond to {name}.
          </Text>
          <Text style={footer}>
            This email was sent from your portfolio contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#0f172a',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: '#ffffff',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  color: '#ffffff',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 0',
  color: '#94a3b8',
};

const messageText = {
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 0',
  padding: '16px',
  backgroundColor: '#1e293b',
  borderRadius: '4px',
  color: '#ffffff',
};

const footer = {
  fontSize: '14px',
  lineHeight: '24px',
  margin: '32px 0 0',
  color: '#64748b',
}; 