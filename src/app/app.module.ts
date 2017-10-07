import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {rootRouterConfig} from './app.routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MTVcompComponent } from './mtvcomp/mtvcomp.component';
import { LogoTvCompComponent } from './logo-tv-comp/logo-tv-comp.component';
import { VH1CompComponent } from './vh1-comp/vh1-comp.component';


import {DataService} from "./services/my-service.service";
import { RightViewCompComponent } from './right-view-comp/right-view-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    MTVcompComponent,
    LogoTvCompComponent,
    VH1CompComponent,
    RightViewCompComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
