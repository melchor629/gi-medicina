# Farmacia

El proyecto se ha creado empleando la [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.
Se ha realizado para la asignatura "Gestión de la Información" y permite gestionar el inventario de una farmacia, compuesto por distintos medicamentos y laboratorios. El personal de la farmacia tiene los siguientes roles:

* Administrador: Puede listar, ver y modificar items.
* Usuario: Puede listar y ver.
* Invitado: Sólo puede listar.

En la aplicacion se declaran las siguientes pantallas (solo 2 pantallas):

* lista: Lista donde se muestran los medicamentos, si hay permiso de escritura se permite añadir un medicamento
* detalle: Se muestran los detalles de un medicamento, si hay permiso de escritura se permite modificarlo

## Funcionamiento

Cuando un usuario hace login manda al servidor el siguiente JSON:
Ruta: /login, método GET y sin token de autentificacion.

```
{
"usuario": x,
"pass": x
}
```

A lo que el servidor responder devolviendo un token de autenticacion y una lista de pantallas indicando los permisos que ese usuario tiene en cada una...
```
{
"token":"xxxxxxxxx",
permisos:
[{"pantalla": x, acceso: x, "modificacion": x}]
}
```

Tras eso cada vez que el usuario haga una petición, se tendrá que adjuntar el token
de autenticación en la cabecera de la petición HTTP (el campo de la cabecera se llamara AuthToken):
```
AuthToken: xxxxxxxxxxxxxx
```

## Pantallas

La aplicación empleará 2 pantallas: lista y detalle, sobre las cuales se tendrán los distintos permisos de lectura y escritura.

## Operaciones de la APP
### Obtener lista de medicamentos
Se hace un GET a la ruta `/lista` con el token de autentificación. Sólo mandará el  nombre
de los medicamentos junto a su id y si queda poco (menos de 10 unidades) en un JSON de la siguiente forma:
```
[{"id":x,"nombre":x, "poco": x},...]
```

#### ¿Por qué se hace esto?
Esto permite que el tráfico de datos entre el cliente y el servidor sea menor, aliviando a ambos.
Sólo se está obteniendo la ID del medicamento, el nombre y si queda poco stock. Esto además de la ventaja de aliviar el trádico de datos tiene otra:

Si con la petición se mandaran todos los datos del medicamento (incluyendo descripción, laboratorio...) nos encontraríamos ante un "problema"
de seguridad, puesto que si el usuario no es invitado, si bien no se le mostrarían estos datos de primera hora en la
interfaz, el usuario podría examinar la respuesta HTTP y extraerlos el mismo del body. Por eso la mejor solución es no mandar esos datos
y obtenerlos conforme el usuario los pide.

Además si alguien día se cambia el criterio de poco stock, es muy fácil hacerlo en el backend.
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
