import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'
import { AppComponent } from './app.component';
import {navigatableComponents, appRoutes} from "./app.routing";
import {RouterModule} from "@angular/router";
import {DialogoComponent} from "./dialogo/dialogo.component";
import {DialogoFormularioComponent} from "./dialogo-formulario/dialogo-formulario.component";

@NgModule({
  declarations: [
    AppComponent, ...navigatableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogoComponent, DialogoFormularioComponent]
})
export class AppModule { }
