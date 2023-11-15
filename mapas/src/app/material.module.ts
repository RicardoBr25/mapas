import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
