import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { AppAutoCompleteComponent } from './app-autocomplete.component';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemDataService} from './in-memory-data.service';
import {AppService} from './app.service';


@NgModule({
  declarations: [ 
    AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, AppAutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemDataService, { dataEncapsulation: false }),
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
