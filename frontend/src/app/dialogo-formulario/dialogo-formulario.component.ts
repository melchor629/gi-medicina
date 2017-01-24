/**
 * Created by antonio on 21/01/17.
 */
import {Component, Input} from '@angular/core';
import {Medicamento} from "../shared/medicamento.model";
import {Laboratorio} from "../shared/laboratorio.model";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'dialogoEdicion',
  templateUrl: './dialogo-formulario.component.html',
  styleUrls: ['./dialogo-formulario.component.css']
})


// Esto representa un dialogo de datos, al cual simplemente se le pasan los datos a representar

export class DialogoFormularioComponent{

  // Este componente es polivalente, puesto que sirve para editar datos existentes

  @Input() medicamento: Medicamento;
  @Input() modo:boolean; // True si es creacion, false si es edicion
  @Input() listaLaboratorios: Array<Laboratorio>;
  @Input() referenciaDialogo: any;

  constructor(public dialogRef: MdDialogRef<DialogoFormularioComponent>){}

  submit(formulario:any){ // Al hacer el submit del formulario
  // Al hacer el submit se debe cerrar la ventana
    this.dialogRef.close();
  }
}
