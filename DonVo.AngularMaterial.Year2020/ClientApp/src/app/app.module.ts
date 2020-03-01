import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { DndModule } from 'ng2-dnd';

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
import { TreeDynamicDataComponent } from './tree-dynamic-data/tree-dynamic-data.component';
import { TreeCheckboxesComponent } from './tree-checkboxes/tree-checkboxes.component';
import { StepperWizardComponent } from './stepper-wizard/stepper-wizard.component';
import { LoginComponent } from './login-register/login.component';
import { RegisterComponent } from './login-register/register.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ChipsAutoCompleteComponent } from './chips-autocomplete/chips-autocomplete.component';
import { ChipsInputComponent } from './chips-input/chips-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FileUploadComponent,
    FormFieldsComponent,
    TableCrudModalComponent,
    CreateUpdateCustomerComponent,
    TreeDynamicDataComponent,
    TreeCheckboxesComponent,
    StepperWizardComponent,
    LoginComponent,
    RegisterComponent,
    DragDropComponent,
    ChipsAutoCompleteComponent,
    ChipsInputComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,

    LayoutModule,

    FileUploadModule,
    FontAwesomeModule,
    NgxFileDropModule,
    DndModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
