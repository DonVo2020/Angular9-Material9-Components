import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialsModule } from './shared/materials.module';

import { LayoutModule } from '@angular/cdk/layout';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormFieldsComponent } from './form-fields/form-fields.component';
import { TableCrudModalComponent } from './table-crud-modal/table-crud-modal.component';
import { CreateUpdateCustomerComponent } from './table-crud-modal/create-update-table-crud-modal/create-update-table-crud-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FileUploadComponent,
    FormFieldsComponent,
    TableCrudModalComponent,
    CreateUpdateCustomerComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,

    LayoutModule,

    FileUploadModule,
    FontAwesomeModule,
    NgxFileDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
