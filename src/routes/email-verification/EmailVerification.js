const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const path = require('path');
// Create a random verification code
const generateVerificationCode = () => {
  return crypto.randomBytes(20).toString('hex');
};

// Create a transport object for nodemailer
let mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maven.edu05@gmail.com',
    pass: 'rlaexyswmxwfitlv'
  }
});

// Route to handle registration form submission
app.post('/register', (req, res) => {
  // Get form data from request body
  const f_name = req.body.s_fname;
  const l_name = req.body.s_lname;
  const email = req.body.s_email;
  const phone = req.body.s_phone;
  const password = req.body.s_password;
  const s_cpassword = req.body.s_cpassword;

  // Generate a verification code for this user
  const verificationCode = generateVerificationCode();

  // Define email details for verification email
  const details = {
    from: 'maven.edu05@gmail.com',
    to: email,
    subject: 'Maven-edu Registration Email Verification',
    html: `Hello ${f_name} ${l_name},<br><br>
           Thank you for registering with Maven-edu. Please click on the following link to verify your email address:<br>
           <a href="http://yourdomain.com/verify/${verificationCode}">Verify Email</a><br><br>
           If you did not register with Maven-edu, please ignore this email.<br><br>
           Regards,<br>
           Maven-edu`
  };

  // Send verification email to the user
  mailTransporter.sendMail(details, (err) => {
    if (err) {
      console.log('Error sending verification email: ', err);
      return res.status(500).json('Error sending verification email.');
    } else {
      console.log('Verification email sent to: ', email);

      // Store verification code in database, along with user's registration details
      // ...

      return res
        .status(200)
        .json(
          'Registration successful. Please check your email for verification instructions.'
        );
    }
  });
});

// Route to handle email verification link clicks
app.get('/verify/:verificationCode', (req, res) => {
  const verificationCode = req.params.verificationCode;

  // Check if verification code is valid (i.e. exists in database)
  // ...

  if (verificationCodeIsValid) {
    // Update user's account status to "Verified" in database
    // ...
    return res
      .status(200)
      .sendFile(path.join(__dirname, 'verification-success.html'));
  } else {
    return res
      .status(400)
      .sendFile(path.join(__dirname, 'verification-failure.html'));
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
