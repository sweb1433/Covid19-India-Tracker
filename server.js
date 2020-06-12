const compression = require("compression")
const express = require('express');
const app = express();
app.use(compression())

app.use(express.static('./dist/read-local-json-angular'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/read-local-json-angular/'}),
);

app.listen(process.env.PORT || 8080);