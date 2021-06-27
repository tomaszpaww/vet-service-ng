import { MatTableModule } from '@angular/material/table';
import { OwnersRoutingModule } from './owners-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersListComponent } from './owners-list/owners-list.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    OwnersListComponent
  ],
  imports: [
    CommonModule,
    OwnersRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class OwnersModule { }
