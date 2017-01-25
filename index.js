const app = require('express')();
const body_parser = require('body-parser');
const cookie_session = require('cookie-session');
const typeorm = require('typeorm');

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

typeorm.createConnection({
    driver: {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'pato',
        database: 'medicina',
    },
    entitySchemas: [
        require('./entities/laboratorio.js'),
        require('./entities/medicamento.js'),
        require('./entities/pantalla.js'),
        require('./entities/permiso.js'),
        require('./entities/rol.js'),
        require('./entities/usuario.js'),
    ],
    usedNamingStrategy: 'camelCase'
}).then(connection => { 
    require('./api.js')(app, connection);

    //Error 404
    app.use((req, res, next) => {
        res.status(404).end("Error 404 :(");
    });

    //Error interno -> 500
    app.use((err, req, res, next) => {
        console.error(err);
        res.status(500).end("Error interno<br>" + require('util').inspect(err));
    });

    app.listen(Number(process.env.PORT) || 8080, () => console.log('Servidor escuchando en http://localhost:' + (Number(process.env.PORT) || 8080)));
})
.catch(error => {
    console.error(error);
    process.exit(1);
});

