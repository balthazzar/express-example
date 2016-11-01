var express = require('express');

var app = express();

var homeController = require('./controllers/home');

app.listen(8080, () => {
    console.log('server started')
});

app.get('/', (req, res) => {
    homeController.queryEx(req.query);
    res.end();
});

app.get('/test/:id', (req, res) => {
    homeController.test(req.params);
    res.send('ololo');
});

app.post('/test1', (req, res) => {
    homeController.postEx(req.body);
    res.json({ a: 'ololo' });
});
