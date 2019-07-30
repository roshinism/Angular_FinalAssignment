import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './component/all/all.component';
import { AddComponent } from './component/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([//inserted- forRoot takes array as parameter.. here we are giving JSON objects
      
      {
        path:"all",
        component:AllComponent
      },
      {
        path:"add",
        component:AddComponent
      }
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
