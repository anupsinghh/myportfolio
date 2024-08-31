// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'singhanupshishupal.119738@marwadiuniversity.ac.in',
    pass: 'Rnco@751'
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'siingh.anupp@gmail.com',
    subject: `Message from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Failed to send message.');
    }
    res.status(200).send('Message sent successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
