/**
 * Created by antonio on 21/01/17.
 */


// representa los permisos que se tienen para una determinada pantalla

export class Permiso{

  /*
  Esto ya no es necesario dado que al usar public en el constructor es como si se declararan estos campos
  pantalla: string;
  acceso: boolean;
  modificacion: boolean;
  */
  constructor(public pantalla: string, public acceso:boolean, public modificacion:boolean){}
}
