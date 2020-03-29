const app = require('express')();
const fileUpload = require('express-fileupload');

app.use(fileUpload());

app.post('/image', (req, res) => {
  if (!req.files) {
    return res.status(400).send({error: 'No file received'});
  }
  res.status(200).json({ base64: req.files.data.data.toString('base64') });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running');
});
