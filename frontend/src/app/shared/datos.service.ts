/**
 * Created by antonio on 22/01/17.
 */

/*
Este servicio gestiona lo relacionado con los datos de medicamentos que manejala aplicación: (obtener, eliminar, editar...)
 */

import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Configuracion } from "./configuracion";
import {Medicamento} from "./medicamento.model";
import {Laboratorio} from "./laboratorio.model";

// Al ser un servicio, es injectable, de ahi su decorador

@Injectable()

export class DatosService {

  medicamentosLista: Array<Medicamento>;
  listaLaboratorios: Array<Laboratorio>;
  cargando: boolean;

  constructor(private http: Http) { // Inyeccion de dependencias de angular, ahora se tiene acceso a http

    // Hsta que se rellene es provisional
    this.medicamentosLista = [new Medicamento(0,"Cargando...",0,0)];
    this.listaLaboratorios = []; // Array vacio
    this.cargando = true;
  }

  // En todas las operaciones de esta clase se requiere adjuntar el token de autenticacion

  // Obtiene la lista de medicamentos, normalmente deberia llamarse una vez al inicio de la aplicacion. Permite rellenar el array medicamentosLista
  obtenerLista(){
    let headers = new Headers();
    headers.append("AuthToken", Configuracion.token); // Token obtenido del login

    return this.http.get(Configuracion.apiBaseUrl + "datos_medicamentos", {
      headers: headers
    })
      .map(res => res.json())
      .do(data => { // Al no devolver nada, se hace un do

        this.medicamentosLista.length = 0; // Limpiamos el array para volverlo a rellenar, asi se mantienen las referencias!!

        data.forEach((medicamento) => {
         this.medicamentosLista.push(new Medicamento(medicamento.ID_MEDICAMENTO,medicamento.NOMBRE_MEDICAMENTO,medicamento.CANTIDAD_DISPONIBLE,medicamento.LABORATORIO));
        });

        // Esta vez no se devuelve nada
      })
      .catch(this.handleErrors);
  }


  // Inserta un medicamento en la base de datos
  insertar(medicamento: Medicamento){

    /*
    Al servidor se manda el siguiente JSON:
    {
    "nombre": x,
    "cantidad": x,
    "laboratorio": x
    }
    */
    this.cargando = true;
  // Se inserta el medicamento en el array de medicamentos
    this.medicamentosLista.push(medicamento); // se añade el medicamento a la lista

    // Ahora se hace la peticion al servidor, el cual devuelve el id, que debe ser modificado en el medicamento nuevo!
    // Para ello una vez se complete la peticion, el medicamento se busca en el array con id = -1 y ya se le asigna el id correcto de cara al
    // futuro uso de la aplicacion
    let headers = new Headers();
    headers.append("AuthToken", Configuracion.token); // Token obtenido del login
    headers.append("Content-Type", "application/json"); //Explícitamente JSON (no se pone solo)
    return this.http.put(Configuracion.apiBaseUrl+"insertar",JSON.stringify({nombre:medicamento.nombreMedicamento,cantidad:medicamento.cantidadDisponible,laboratorio:medicamento.laboratorio}),
      {
        headers: headers
      }
    ).map(res => res.json()).do(data => {this.medicamentosLista[this.localizarPorId(-1)].idMedicamento = data.id;}).catch(this.handleErrors);
  }

  // Modifica un medicamento
  modificar(medicamento: Medicamento){

    /*
     Al servidor se manda el siguiente JSON?:
     {
     "id": x,
     "nombre": x,
     "cantidad": x,
     "laboratorio": x
     }
     */
// Simplemente se manda la peticion al servidor, en el cliente no es necesario modificar el dato gracias al two way data binding
  this.cargando = true;
  let headers = new Headers();
  headers.append("AuthToken", Configuracion.token); // Token obtenido del login
  headers.append("Content-Type", "application/json"); //Explícitamente JSON (no se pone solo)
  return this.http.put(Configuracion.apiBaseUrl+"modificar",JSON.stringify({id:medicamento.idMedicamento,nombre:medicamento.nombreMedicamento,cantidad:medicamento.cantidadDisponible,laboratorio:medicamento.laboratorio}),
    {
      headers: headers
    }
  ).catch(this.handleErrors);
  }

  obtenerLaboratorios(){
    this.cargando = true;
    let headers = new Headers();
    headers.append("AuthToken", Configuracion.token); // Token obtenido del login, campo estatico de clase

    return this.http.get(Configuracion.apiBaseUrl + "laboratorios", {
      headers: headers
    })
      .map(res => res.json())
      .do(data => { // Al no devolver nada, se hace un do

        data.forEach((laboratorio) => {
          this.listaLaboratorios.push(new Laboratorio(laboratorio.ID_LABORATORIO, laboratorio.NOMBRE_LABORATORIO));
        });
        console.log(this.listaLaboratorios);
        // Esta vez no se devuelve nada
      })
      .catch(this.handleErrors);
  }

  borrar(id: number){ // Borra un medicamento, simplementa se pasa la id de este

    console.log("Se pide borrar el elemento con id; "+id);
    // En primer lugar se quita de la lista, para ello se localiza
    this.medicamentosLista.splice(this.localizarPorId(id),1); // Se elimina el elemento del array

    // Se procede a borrarlo de la base de datos en el servidor..., hacer llamada a la API...
    this.cargando = true;
    let headers = new Headers();
    headers.append("AuthToken", Configuracion.token); // Token obtenido del login, campo estatico de clase

    return this.http.delete(Configuracion.apiBaseUrl + "borrar/"+id ,{
      headers: headers
    }).catch(this.handleErrors);
  }

  public localizarPorId(id: number):number{
    let i = 0;

    while(i < this.medicamentosLista.length && this.medicamentosLista[i].idMedicamento != id){
      i++;
    }
    // Suponiendo que siempre se encuentra en lalista no habria que controlar otra situacion
    return i;
  }

  public localizarLabPorId(id: number){
    let i = 0;

    while(i < this.listaLaboratorios.length && this.listaLaboratorios[i].id != id){
      i++;
    }
    // Suponiendo que siempre se encuentra en lalista no habria que controlar otra situacion
    return i;
  }


  // Gestion de errores
  handleErrors(error: Response) {
    return Observable.throw(error);
  }
}
