Install Node.js and npm (Node Package Manager) on your computer. You can find the installation instructions for your platform on the official Node.js website.

Create a new directory for your server, navigate to it in the terminal, and run npm init to create a package.json file.

1.Install express and multer packages by running: npm install express multer

2.Create a file named server.js in the server directory and paste the following code:

4.Install express and multer packages by running: npm install express multer

5.Create a file named server.js in the server directory and paste the following code:

const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  res.status(200).send('File uploaded successfully');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

5.Create a directory named uploads in the server directory. This is where the uploaded files will be stored.

6.Run the server by executing node server.js in the terminal.