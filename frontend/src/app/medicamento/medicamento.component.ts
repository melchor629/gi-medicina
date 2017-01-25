/**
 * Created by antonio on 22/01/17.
 */

/**
 * Created by antonio on 21/01/17.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DatosService} from "../shared/datos.service";
import {Medicamento} from "../shared/medicamento.model";
import {LoginService} from "../shared/login.service";

@Component({
  selector: 'medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css'],
})


export class MedicamentoComponent{

  //Entradas que se le proporciona a los componentes
  @Input() medicamento: Medicamento;
  @Input() criterioBusqueda:string;

  // Salidas: El componente proporciona salidas
  // El tipo generico indica la carga util del evento, en este caso un numero
  @Output() verDetalles: EventEmitter<number> = new EventEmitter<number>();
  // Cuando se quiere editar el evento
  @Output() editarMedicamento: EventEmitter<number> = new EventEmitter<number>(); // La id

  constructor(private servicioDatos: DatosService, public servicioLogin: LoginService){ // Se obtiene con inyecion de dependencias el servicio de datos para
    // poder hacer operaciones con el elemento...
    this.criterioBusqueda = "";
  }

  borrar(){ // permite borrar un elemento, tras eso se lanzar
    this.servicioDatos.borrar(this.medicamento.idMedicamento).subscribe(()=>{this.servicioDatos.cargando = false;},(error)=>{console.log("Vaya! Error borrando: "+error)});
  }

  cumpleCriterio():boolean{
    //console.log("Nombre: "+this.medicamento.nombreMedicamento+" y criterio: "+this.criterioBusqueda);

    let retorno = true;

    if(typeof this.criterioBusqueda !== 'undefined') {
      retorno = this.medicamento.nombreMedicamento.toLowerCase().indexOf(this.criterioBusqueda.toLowerCase()) !== -1;
    }

    return retorno;
  }

  onClickDetalles(){
    this.verDetalles.emit(this.medicamento.idMedicamento); // Se devuelve el id de medicamento
  }

  editar(){ // edicion del medicamento..., debe propagarse un evento de que se desea editar
    this.editarMedicamento.emit(this.medicamento.idMedicamento);
  }

}
