import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { WildAnimalsRoutingModule } from './wild-animals-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WildAnimalsListComponent } from './wild-animals-list/wild-animals-list.component';
import { WildAnimalsManageComponent } from './wild-animals-manage/wild-animals-manage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    WildAnimalsListComponent,
    WildAnimalsManageComponent
  ],
  imports: [
    CommonModule,
    WildAnimalsRoutingModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    RouterModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class WildAnimalsModule { }
