const express = require('express');
const app = express();
const bodyParser = require('body-parser')


const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/stringSort', (req, res) => {
  const string = req.body.string;
  // console.log('STRING is ', string);
  const sorted = string.split('').sort((a, b) => b - a).join('');

  res.end(sorted);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});