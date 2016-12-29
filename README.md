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
 - [typeorm][1]
 - [typeorm ejemplo es6][2]
 - [express.js][3]
 - [body-parser][4]
 - [cookie-session][5]
 - [node.js] [6]


    [1]: https://github.com/typeorm/typeorm
    [2]: https://github.com/typeorm/javascript-example/tree/master/src/app3-es6
    [3]: http://expressjs.com/en/4x/api.html
    [4]: http://expressjs.com/en/resources/middleware/body-parser.html
    [5]: http://expressjs.com/en/resources/middleware/cookie-session.html
    [6]: https://nodejs.org/api/
