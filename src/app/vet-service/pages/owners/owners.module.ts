import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { OwnersRoutingModule } from './owners-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersListComponent } from './owners-list/owners-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OwnersManageComponent } from './owners-manage/owners-manage.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    OwnersListComponent,
    OwnersManageComponent
  ],
  imports: [
    CommonModule,
    OwnersRoutingModule,
    MatTableModule,
    MatCardModule,
    MatSnackBarModule,
    MatSnackBarModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class OwnersModule { }
