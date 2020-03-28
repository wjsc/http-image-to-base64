const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
app.use(fileUpload());

app.post('/image', (req, res) => {
  if (!req.files) {
    return res.status(400).send('');
  }
  res.status(200).send(req.files.data.data.toString('base64'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server inited');
});