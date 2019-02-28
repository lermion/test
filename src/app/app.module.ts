import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DetailsComponent } from './details/details.component';

@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        DetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }