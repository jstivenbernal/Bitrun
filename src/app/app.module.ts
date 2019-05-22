import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBitrunComponent } from './componentes/app-bitrun/app-bitrun.component';


@NgModule({
  declarations: [
    AppComponent,
    AppBitrunComponent,
    
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
