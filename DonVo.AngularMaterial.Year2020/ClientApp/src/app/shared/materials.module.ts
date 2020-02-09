import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
  ],
  providers: [],
})
export class MaterialsModule { }
