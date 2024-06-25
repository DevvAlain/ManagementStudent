import React from 'react';
import { Typography, Container } from '@mui/material';

function Contact() {
  return (
    <Container>
      <Typography variant="h4" component="div" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Email: vuthanhduc181203@gmail.com
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Phone: 123-456-7890
      </Typography>
    </Container>
  );
}

export default Contact;
