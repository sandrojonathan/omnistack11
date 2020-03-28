var express = require('express');
const cors = require('cors');
const routes = require('./routes')

var app = express();

app.use(cors());
app.use( express.json() );
app.use(routes)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
