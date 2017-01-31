# gi-medicina
Proyecto para Gestión de la Información sobre medicinas y esas cosas

## Ejecutar la aplicación
Primero se ha de crear la base de datos y rellenar con datos. En la carpeta `sql` se encuentran los diversos SQL para crear la estructura y rellenar con datos. El servidor supone que el usuario es `root` y que la contraseña es `pato`. Se puede modificar en `index.js` estos parámetros (_lineas 24 y 25_).

Hay que instalar las dependencias de node.js, simplemente con el comando `npm install` se consigue obtener las dependencias mencionadas.

Una vez se tenga lo anterior listo, se puede ejecutar el servidor con `node index`.

## Estructura
```
    | .gitignore
    | README.md
    | api.js
    | index.js
    | package.json
    \ entities
        | Readme.md
        | medicamento.js
        | permiso.js
        | usuario.js
        | laboratorio.js
        | pantalla.js
        | rol.js
        | ...
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
    \ frontend
        | ...
```

**entities**: Contiene el mapeo BD-node.js de las tablas

**models**: Contiene objetos que representan las tablas de la BD

**web**: Contiene la aplicación web para manejar la BD

**frontend**: Contiene el código fuente de la web

**index.js**: Servidor web

**api.js**: La API del servidor web

## Documentación

 - [typeorm](https://github.com/typeorm/typeorm)
 - [typeorm ejemplo es6](https://github.com/typeorm/javascript-example/tree/master/src/app3-es6)
 - [express.js](http://expressjs.com/en/4x/api.html)
 - [body-parser](http://expressjs.com/en/resources/middleware/body-parser.html)
 - [cookie-session](http://expressjs.com/en/resources/middleware/cookie-session.html)
 - [node.js](https://nodejs.org/api/)
