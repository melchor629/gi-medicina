const app = require('express')();
const body_parser = require('body-parser');
const cookie_session = require('cookie-session');

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});
app.use(require('express').static('web'));
app.use(body_parser.json());
app.use(cookie_session({
    //https://github.com/expressjs/cookie-session
    name: 'gimedicina',
    keys: ['gi', 'medi', 'cina'],
    maxAge: 60 * 60 * 1000 // 1 hora en milisegundos
}));

require('./api.js')(app);

//Error 404
app.use((req, res, next) => {
    res.status(404).end("Error 404 :(");
});

//Error interno -> 500
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).end("Error interno<br>" + require('util').inspect(err));
});

app.listen(8080, () => console.log('Servidor escuchando en http://localhost:8080'));
