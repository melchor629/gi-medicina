/**
 * Created by antonio on 21/01/17.
 */
import { Component } from '@angular/core';
import {LoginService} from "../../shared/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private servicioLogin: LoginService, private router: Router){ // Gracias a la inyeccion de dependencia de angular

  }

  submit(formulario: any):void{ // Otra opcion: el object destructuring
    console.log("Enviando datos, usuario: "+formulario.usuario+" y contraseña "+formulario.pass);
    this.servicioLogin.login(formulario.usuario, formulario.pass).subscribe(
      () => this.router.navigate(["lista"]),
      (error) => {alert("Oh, vaya! Ha habido un error, mira la consola para mas detalles..."); console.log(error);}
    );
  }

}
