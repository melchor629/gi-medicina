/**
 * Created by antonio on 21/01/17.
 */
import {Component, Input} from '@angular/core';
import {Medicamento} from "../shared/medicamento.model";
import {DatosService} from "../shared/datos.service";

@Component({
  selector: 'dialogoContenido',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})


// Esto representa un dialogo para mostrar datos, al cual simplemente se le pasan los datos que debe mostrar

export class DialogoComponent{


  @Input() medicamento:Medicamento;
  @Input() nombreLab:string;
}
