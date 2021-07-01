import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { PetsRoutingModule } from './pets-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsManageComponent } from './pets-manage/pets-manage.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { VetServiceModule } from '../../vet-service.module';



@NgModule({
  declarations: [
    PetsListComponent,
    PetsManageComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    VetServiceModule
  ]
})
export class PetsModule { }
