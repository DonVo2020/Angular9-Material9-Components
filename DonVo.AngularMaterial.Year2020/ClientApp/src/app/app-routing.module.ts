import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormFieldsComponent } from './form-fields/form-fields.component';
import { TableCrudModalComponent } from './table-crud-modal/table-crud-modal.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'form-fields', component: FormFieldsComponent },
  { path: 'table-crud-modal', component: TableCrudModalComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
