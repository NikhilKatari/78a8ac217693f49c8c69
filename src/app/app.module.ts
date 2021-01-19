// import {  } from 'ngx-bootstrap/modal';
import { BsModalService, ModalModule,BsModalRef } from 'ngx-bootstrap/modal';

// import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule

    // HttpClient
  ],
  providers: [ServiceService,BsModalRef,BsModalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
