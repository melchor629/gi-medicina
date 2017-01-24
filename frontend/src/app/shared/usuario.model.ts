import {Permiso} from "./permiso.model";
/**
 * Created by antonio on 21/01/17.
 */

// representa un usuario que ha hecho login y tiene unos permisos determinados
export class Usuario{
  nombre: string;
  permisos: Permiso[]; // Permisos del ususuario

  constructor(){
    // Ojo!! El array es un objeto y por eso hay que inicalizarlo!!
    // Inicializar los arrays!!
   this.permisos = [];
  }

  // Dado un nombre de pantalla, devuelve el permiso
  permisoPantalla(pantalla:string): Permiso{
    let permiso: Permiso;
    let i = 0;

    while(i < this.permisos.length && this.permisos[i].pantalla != pantalla){
      i++;
    }

    if(i == this.permisos.length){
      permiso = null; // Si no se encuentra se devuelve null
    }
    else{
      permiso = this.permisos[i];
    }
    return permiso;
  }

}
