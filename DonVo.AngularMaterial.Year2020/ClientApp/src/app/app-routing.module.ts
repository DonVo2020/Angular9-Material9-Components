import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormFieldsComponent } from './form-fields/form-fields.component';
import { TableCrudModalComponent } from './table-crud-modal/table-crud-modal.component';
import { TreeDynamicDataComponent } from './tree-dynamic-data/tree-dynamic-data.component';
import { TreeCheckboxesComponent } from './tree-checkboxes/tree-checkboxes.component';
import { StepperWizardComponent } from './stepper-wizard/stepper-wizard.component';
import { LoginComponent } from './login-register/login.component';
import { RegisterComponent } from './login-register/register.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ChipsAutoCompleteComponent } from './chips-autocomplete/chips-autocomplete.component';
import { ChipsInputComponent } from './chips-input/chips-input.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'form-fields', component: FormFieldsComponent },
  { path: 'table-crud-modal', component: TableCrudModalComponent },
  { path: 'tree-dynamic-data', component: TreeDynamicDataComponent },
  { path: 'tree-checkboxes', component: TreeCheckboxesComponent },
  { path: 'stepper-wizard', component: StepperWizardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'chips-autocomplete', component: ChipsAutoCompleteComponent },
  { path: 'chips-input', component: ChipsInputComponent },
  { path: 'drag-drop', component: DragDropComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
