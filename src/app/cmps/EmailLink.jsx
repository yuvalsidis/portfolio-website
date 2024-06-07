
import React from 'react';

const EmailLink = () => {
  const emailAddress = 'yuvalsidis@gmail.com';
  const mailtoLink = `mailto:${emailAddress}`;

  return (
    <a href={mailtoLink}>Send Email</a>
  );
};

export default EmailLink;
