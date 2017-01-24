/**
 * Created by antonio on 22/01/17.
 */


export class Medicamento{ // representa un medicamento en la aplicacion

  // El id ya lo dara la base de datos...
  constructor(public idMedicamento:number,public nombreMedicamento:string, public cantidadDisponible: number, public laboratorio: number){}

}
