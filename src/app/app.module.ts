import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MymatModule } from './mymat/mymat.module';
import { LocaldataService } from './services/localdata.service';
import { WebglComponent } from './webgl/webgl.component';

@NgModule({
  declarations: [
    AppComponent,
    WebglComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MymatModule,
    HttpClientModule
  ],
  providers: [LocaldataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
