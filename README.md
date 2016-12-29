# gi-medicina
Proyecto para Gestión de la Información sobre medicinas y esas cosas

## Estructura
```
    | .gitignore
    | README.md
    | api.js
    | index.js
    | package.json
    \ models
        | Readme.md
        | medicamento.js
        | permiso.js
        | usuario.js
        | laboratorio.js
        | pantalla.js
        | rol.js
        | ...
    \ web
        | package.json
        | index.html
        | ...
```

**models**: Contiene el mapeo BD-node.js de las tablas

**web**: Contiene la aplicación web para manejar la BD

**index.js**: Servidor web

**api.js**: La API del servidor web

## Documentación

 - [typeorm](https://github.com/typeorm/typeorm)
 - [typeorm ejemplo es6](https://github.com/typeorm/javascript-example/tree/master/src/app3-es6)
 - [express.js](http://expressjs.com/en/4x/api.html)
 - [body-parser](http://expressjs.com/en/resources/middleware/body-parser.html)
 - [cookie-session](http://expressjs.com/en/resources/middleware/cookie-session.html)
 - [node.js](https://nodejs.org/api/)
