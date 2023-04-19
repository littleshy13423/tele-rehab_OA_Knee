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
//const upload = multer({ storage, limits: { fileSize: 100 * 1024 * 1024 } }); // Set a limit of 100MB for file uploads

app.post('/upload', upload.single('file'), (req, res) => {
  res.status(200).send('File uploaded successfully');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
