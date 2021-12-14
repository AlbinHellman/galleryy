// Bappnet Server
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const host = '127.0.0.1';
const port = 3008;

app.use(cors());
app.use(bodyParser.json());

app.use('/', apiRoutes);
//app.post('/api', apiRoutes);

app.get('*', function (req, res) {
    res.status(404);
    res.send('NOT ALLOWED');
});

app.post('*', function (req, res) {
    res.status(404);
    res.send('NOT ALLOWED');
});

app.listen(port, host, () => {
    console.log(`Run at: http://${host}:${port}`);
});

