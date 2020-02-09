import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialsModule } from './shared/materials.module';

import { FileUploadModule } from 'ng2-file-upload';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,

    AppRoutingModule,
    MaterialsModule,

    FileUploadModule,
    FontAwesomeModule,
    NgxFileDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
