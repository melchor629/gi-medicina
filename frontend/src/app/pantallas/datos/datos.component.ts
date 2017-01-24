/**
 * Created by antonio on 21/01/17.
 */
import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../shared/login.service";
import {Configuracion} from "../../shared/configuracion";
import {Router} from "@angular/router";
import {Usuario} from "../../shared/usuario.model";
import {DatosService} from "../../shared/datos.service";
import {MdDialog} from "@angular/material"
import {DialogoComponent} from "../../dialogo/dialogo.component";
import {DialogoFormularioComponent} from "../../dialogo-formulario/dialogo-formulario.component";
import {Medicamento} from "../../shared/medicamento.model";

@Component({
  selector: 'datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
  providers: [DatosService]
  // No se usa pipe porque: We must include our pipe in the declarations array of the AppModule
})
export class DatosComponent implements OnInit{


  busquedaNombre: string;
  usuario: Usuario; // Servicio login es un singleton, de ahi que en esta pagina siga el objeto...
  listaMedicamentos: any;

  constructor(private servicioLogin: LoginService, private router: Router, private servicioDatos: DatosService, private dialogo: MdDialog) { // Inyeccion de dependencias de angular, el servicio deberia ser singleton
    this.usuario = servicioLogin.usuario;
    this.listaMedicamentos = servicioDatos.medicamentosLista;
  }

  logout(): void{
    Configuracion.token = ""; // Se borra el token
    this.router.navigate([""]); // se vuelve a la pantalla de login
    this.busquedaNombre = ""; // Cadena vacia
  }

  ngOnInit(): void {

    if(Configuracion.token == ""){
      alert("Debes tener un token valido! Accede primero con tu usuario");
      this.router.navigate([""]);
    }
  else {
      this.servicioDatos.obtenerLista().subscribe(
        () => {
        }, // Si exito no se hace nada, // Hay que actualizar la referencia, que al finalno es necesario por el trcuo de vaciar el array: array.length = 0;
        (error) => {
          alert("Oh, vaya! Ha habido un error cargando la lista, mira la consola para mas detalles...");
          console.log(error);
        }
      );

      // Ademas es necesario obtener la lista de laboratorios
      this.servicioDatos.obtenerLaboratorios().subscribe(() => {}, (error) => {console.log(error);alert("Vaya!, Ha habido un error obteniendo los laboratorios, intentalo de nuevo...");});
    }

  }

  mostrarDialogoVer(id:number){ // Cuando se le pasa una id muestra el dialogo de datos, no hace nada si el usuario no tiene permiso de ver el detalle

    if(this.usuario.permisoPantalla("detalle").acceso) { // Indica que el usuario tiene permiso de modificacion

      // A continuacion se le pasan los datoos pertinentes al dialogo
      let referenciaDialogo = this.dialogo.open(DialogoComponent);
      referenciaDialogo.componentInstance.medicamento = this.listaMedicamentos[this.servicioDatos.localizarPorId(id)];
      referenciaDialogo.componentInstance.nombreLab =this.servicioDatos.listaLaboratorios[this.servicioDatos.localizarLabPorId(referenciaDialogo.componentInstance.medicamento.laboratorio)].nombre;
    }
  }

  mostrarFormularioEdicion(id:number){
    let medicamento = this.listaMedicamentos[this.servicioDatos.localizarPorId(id)];
    // Muestra el formulario de edicion del medicamento en un dialogo modal:
    let referenciaDialogo = this.dialogo.open(DialogoFormularioComponent);
    referenciaDialogo.componentInstance.medicamento = medicamento;
    referenciaDialogo.componentInstance.modo = false;
    referenciaDialogo.componentInstance.listaLaboratorios = this.servicioDatos.listaLaboratorios; // Lista de laboratorios cuyos elementos poseen los atributos que necesita el componente material select para funcionar

    /*referenciaDialogo.afterClosed.then(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });*/
    referenciaDialogo.afterClosed().subscribe(() => {this.servicioDatos.modificar(medicamento);});
  }

  mostrarFormularioCreacion(){

    // Se crea un objeto nuevo vacio en el que se almacenara el medicamento que se esta creando
    let medicamento: Medicamento = new Medicamento(-1,'',0,0); // Indica un id temporal
    // Muestra el formulario de edicion del medicamento en un dialogo modal:
    let referenciaDialogo = this.dialogo.open(DialogoFormularioComponent);
    referenciaDialogo.componentInstance.medicamento = medicamento;
    referenciaDialogo.componentInstance.modo = true;
    referenciaDialogo.componentInstance.listaLaboratorios = this.servicioDatos.listaLaboratorios;
    referenciaDialogo.afterClosed().subscribe(() => {this.servicioDatos.insertar(medicamento);});
  }
}
