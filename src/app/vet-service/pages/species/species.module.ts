import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { SpeciesRoutingModule } from './species-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesManageComponent } from './species-manage/species-manage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpeciesPageComponent } from './species-page/species-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { VetServiceModule } from '../../vet-service.module';

@NgModule({
  declarations: [
    SpeciesListComponent,
    SpeciesManageComponent,
    SpeciesPageComponent
  ],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    MatTableModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatBadgeModule,
    VetServiceModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class SpeciesModule { }
