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
