import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAwesomesComponent } from './list-awesomes/list-awesomes.component';
import { UpdateAwesomeComponent } from './update-awesome/update-awesome.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateAwesomeComponent } from './create-awesome/create-awesome.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAwesomesComponent,
    UpdateAwesomeComponent,
    CreateAwesomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
