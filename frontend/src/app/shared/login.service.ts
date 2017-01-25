/**
 * Created by antonio on 21/01/17.
 */

import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Usuario} from "./usuario.model";
import {Configuracion} from "./configuracion";
import { Permiso } from "./permiso.model";


// Al ser injectable es susceptible del sistema de inyeccion de dependencias de angular
@Injectable()

export class LoginService {

  usuario: Usuario; // representa el usuario que esta usando la aplicacion, al sr este servicio un singleton por estar importado
  // en el componente raiz, siempre estara accesible

  constructor(private http: Http) { // Inyeccion de dependencias de angular, ahora se tiene acceso a http
    this.usuario = new Usuario(); // Se crea una instancia
  }


  login(nombre: string, pass: string) {

    this.usuario.nombre = nombre;

    let headers = new Headers();
    headers.append("Content-Type", "application/json"); // Se va a mandar un JSON al servidor
    headers.append("Accept", "application/json"); // Y se recibe JSON

    return this.http.post(
      Configuracion.apiBaseUrl + "login", // En principio ruta login

      // A continuacion se crea el json
      JSON.stringify({
        nombre: nombre,
        password: pass,
      }),
      { headers: headers } // Se añade el header para indicar que se manda un JSON al servidor
    )
      .map(response => response.json()) // Convertir respuesta JSON en estructura del lenguaje, uso de funcion arrow
      .do(data => {
        Configuracion.token = data.token; // Se obtiene un token

        // A continuacion se recorre el array que esta en la propiedad permisos
        // Y asi se rellena el array del usuario
        data.permisos.forEach((permiso) => {
          this.usuario.permisos.push(new Permiso(permiso.pantalla, permiso.acceso, permiso.modificacion));
        });

      })
      .catch(this.handleErrors);
  }

  // Gestion de errores
  handleErrors(error: Response) {
    return Observable.throw(error);
  }
}
