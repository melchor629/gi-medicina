/**
 * Created by antonio on 21/01/17.
 */
import 'hammerjs'; // necesario para que funcionen ciertos elementos de angular material
import {Routes} from '@angular/router';
import { DatosComponent } from './pantallas/datos/datos.component';
import {LoginComponent} from "./pantallas/login/login.component";
import {MedicamentoComponent} from "./medicamento/medicamento.component";
import {DialogoComponent} from "./dialogo/dialogo.component";
import {DialogoFormularioComponent} from "./dialogo-formulario/dialogo-formulario.component";

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'lista', component: DatosComponent }
];

export const navigatableComponents = [
  LoginComponent, DatosComponent, MedicamentoComponent, DialogoComponent, DialogoFormularioComponent, DialogoFormularioComponent // Necesario para la declaracion en el modulo, aunque no sea navegable
];
