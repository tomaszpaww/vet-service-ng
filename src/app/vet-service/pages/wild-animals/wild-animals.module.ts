import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { WildAnimalsRoutingModule } from './wild-animals-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WildAnimalsListComponent } from './wild-animals-list/wild-animals-list.component';
import { WildAnimalsManageComponent } from './wild-animals-manage/wild-animals-manage.component';

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
    FlexLayoutModule
  ]
})
export class WildAnimalsModule { }
