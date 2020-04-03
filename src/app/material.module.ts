import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatChipsModule,
  MatExpansionModule,
  MatDialogModule,
  MatCheckboxModule, 
  MatRadioModule,
  MatTabsModule,
  MatSelectModule,
  MatBadgeModule,
  MatSidenavModule,
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatDialogModule ,
    MatCheckboxModule, 
    MatRadioModule,
    MatTabsModule,
    MatSelectModule,
    MatBadgeModule,
    MatSidenavModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }

